import { drizzle as drizzleD1 } from "drizzle-orm/d1";
import { drizzle as drizzleLocal } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import fs from "fs";
import path from "path";
import { hashPassword } from "better-auth/crypto";
import * as schema from "../src/lib/server/db/schema";
import {
  User,
  Account,
  Tree,
  TreeMember,
  Node,
  Edge,
  CustomField,
  CustomFieldValue,
} from "../src/lib/server/db/schema";

// Helper to load .env variables manually into process.env
function loadEnv() {
  const envPath = path.resolve(".env");
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
      const match = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(['"]?)(.*?)\2\s*$/);
      if (match) {
        process.env[match[1]] = match[2] ? match[3] : match[3].trim();
      }
    }
  }
}

// REST call to Cloudflare D1 Query API
async function executeD1Query(sql: string, params: any[]) {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const databaseId = process.env.CLOUDFLARE_DATABASE_ID;
  const token = process.env.CLOUDFLARE_D1_TOKEN;

  if (!accountId || !databaseId || !token) {
    throw new Error(
      "Missing Cloudflare D1 credentials in .env. Ensure CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_DATABASE_ID, and CLOUDFLARE_D1_TOKEN are set."
    );
  }

  // D1 HTTP API expects timestamp numbers instead of Date objects
  const serializedParams = params.map((p) =>
    p instanceof Date ? p.getTime() : p
  );

  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sql, params: serializedParams }),
  });

  const body = (await res.json()) as any;
  if (!body.success) {
    throw new Error(`Cloudflare D1 Query failed: ${JSON.stringify(body.errors)}`);
  }

  return body.result?.[0] || { results: [], success: true, meta: {} };
}

// Mock Cloudflare D1Database for Drizzle D1 Driver
function createMockD1Database(): any {
  const prepare = (query: string) => {
    let params: any[] = [];
    return {
      bind(...args: any[]) {
        params = args;
        return this;
      },
      async all() {
        const result = await executeD1Query(query, params);
        return { results: result.results || [], success: result.success, meta: result.meta };
      },
      async run() {
        const result = await executeD1Query(query, params);
        return { success: result.success, meta: result.meta };
      },
      async first(colName?: string) {
        const result = await executeD1Query(query, params);
        const row = result.results?.[0] || null;
        if (row && colName) {
          return row[colName];
        }
        return row;
      },
      async raw() {
        const result = await executeD1Query(query, params);
        const rows = result.results || [];
        return rows.map((row: any) => Object.values(row));
      },
    };
  };

  return {
    prepare,
    async batch(statements: any[]) {
      const results = [];
      for (const stmt of statements) {
        results.push(await stmt.all());
      }
      return results;
    },
    async exec(query: string) {
      const result = await executeD1Query(query, []);
      return { count: result.meta?.changes || 0, duration: result.meta?.duration || 0 };
    },
  };
}

// Helper to find the local D1 SQLite file in .wrangler
function findLocalDbPath(): string {
  const envUrl = process.env.DATABASE_URL;
  if (envUrl) {
    return envUrl.replace(/^file:/, "");
  }

  const wranglerPath = path.resolve(".wrangler");
  if (fs.existsSync(wranglerPath)) {
    const findSqlite = (dir: string): string | null => {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
          const found = findSqlite(fullPath);
          if (found) return found;
        } else if (file.endsWith(".sqlite") && file !== "metadata.sqlite") {
          return fullPath;
        }
      }
      return null;
    };
    const localDb = findSqlite(wranglerPath);
    if (localDb) {
      console.log(`Auto-detected D1 local SQLite database: ${localDb}`);
      return localDb;
    }
  }

  return "./dev.db";
}

async function main() {
  loadEnv();
  const isRemote = process.argv.includes("--remote");
  let db: any;
  let sqlite: any;

  if (isRemote) {
    console.log("Connecting directly to remote Cloudflare D1...");
    const mockD1 = createMockD1Database();
    db = drizzleD1(mockD1, { schema });
  } else {
    const sqlitePath = findLocalDbPath();
    console.log(`Connecting directly to local SQLite database: ${sqlitePath}`);
    sqlite = new Database(sqlitePath);
    db = drizzleLocal(sqlite, { schema });
  }

  console.log("Seeding database...");

  // 1. Create a mock user (matching Better Auth format)
  await db.insert(User).values({
    id: "test-user-id",
    name: "Gia Tộc Admin",
    email: "admin@example.com",
    emailVerified: true,
    role: "admin",
    username: "admin",
    createdAt: new Date("2024-05-26T00:00:00Z"),
    updatedAt: new Date("2024-05-26T00:00:00Z"),
  }).onConflictDoNothing();

  // 1.1 Create mock credential account (password is 'password123')
  await db.insert(Account).values({
    id: "test-account-id",
    accountId: "test-user-id",
    providerId: "credential",
    userId: "test-user-id",
    password: await hashPassword("password123"),
    createdAt: new Date("2024-05-26T00:00:00Z"),
    updatedAt: new Date("2024-05-26T00:00:00Z"),
  }).onConflictDoNothing();

  // 2. Create a mock family tree
  await db.insert(Tree).values({
    id: "test-tree-id",
    name: "Nguyễn Gia Tộc Phả",
    description: "Gia phả dòng họ Nguyễn chi thứ ba tại Hà Nội.",
    createdAt: new Date("2024-05-26T00:00:00Z"),
    updatedAt: new Date("2024-05-26T00:00:00Z"),
  }).onConflictDoNothing();

  // 3. Associate the user to the tree as OWNER
  await db.insert(TreeMember).values({
    id: "member-owner-id",
    treeId: "test-tree-id",
    userId: "test-user-id",
    role: "OWNER",
    createdAt: new Date("2024-05-26T00:00:00Z"),
  }).onConflictDoNothing();

  // 4. Insert Custom Field definition
  await db.insert(CustomField).values({
    id: "field-mil-id",
    treeId: "test-tree-id",
    name: "Binh nghiệp",
    type: "STRING",
  }).onConflictDoNothing();

  // 5. Insert Family Member Nodes
  // Generation 1 (Grandparents)
  await db.insert(Node).values({
    id: "node-grandpa-id",
    treeId: "test-tree-id",
    firstName: "An",
    lastName: "Nguyễn Văn",
    gender: "MALE",
    birthDate: new Date("1910-01-01T00:00:00Z"),
    deathDate: new Date("2000-01-01T00:00:00Z"),
    lunarBirthDate: "01/11 Kỷ Dậu",
    jobPosition: "Nhà Nho",
    createdAt: new Date("2024-05-26T00:00:00Z"),
    updatedAt: new Date("2024-05-26T00:00:00Z"),
  }).onConflictDoNothing();

  await db.insert(Node).values({
    id: "node-grand grandma-id", // Note: original was grandma
    id: "node-grandma-id",
    treeId: "test-tree-id",
    firstName: "Bình",
    lastName: "Lê Thị",
    gender: "FEMALE",
    birthDate: new Date("1915-01-01T00:00:00Z"),
    deathDate: new Date("2005-01-01T00:00:00Z"),
    lunarBirthDate: "12/03 Ất Mão",
    createdAt: new Date("2024-05-26T00:00:00Z"),
    updatedAt: new Date("2024-05-26T00:00:00Z"),
  }).onConflictDoNothing();

  // Generation 2 (Parents & Uncle)
  await db.insert(Node).values({
    id: "node-father-id",
    treeId: "test-tree-id",
    firstName: "Cường",
    lastName: "Nguyễn Văn",
    gender: "MALE",
    birthDate: new Date("1955-01-01T00:00:00Z"),
    phone: "0912345678",
    jobPosition: "Kỹ sư",
    createdAt: new Date("2024-05-26T00:00:00Z"),
    updatedAt: new Date("2024-05-26T00:00:00Z"),
  }).onConflictDoNothing();

  await db.insert(Node).values({
    id: "node-mother-id",
    treeId: "test-tree-id",
    firstName: "Dung",
    lastName: "Trần Thị",
    gender: "FEMALE",
    birthDate: new Date("1958-01-01T00:00:00Z"),
    createdAt: new Date("2024-05-26T00:00:00Z"),
    updatedAt: new Date("2024-05-26T00:00:00Z"),
  }).onConflictDoNothing();

  await db.insert(Node).values({
    id: "node-uncle-id",
    treeId: "test-tree-id",
    firstName: "Chiến",
    lastName: "Nguyễn Văn",
    gender: "MALE",
    birthDate: new Date("1960-01-01T00:00:00Z"),
    jobPosition: "Đại tá quân đội",
    createdAt: new Date("2024-05-26T00:00:00Z"),
    updatedAt: new Date("2024-05-26T00:00:00Z"),
  }).onConflictDoNothing();

  // Generation 3 (Self)
  await db.insert(Node).values({
    id: "node-self-id",
    treeId: "test-tree-id",
    firstName: "Đông",
    lastName: "Nguyễn Văn",
    gender: "MALE",
    birthDate: new Date("1985-01-01T00:00:00Z"),
    email: "dong.nguyen@example.com",
    phone: "0987654321",
    jobPosition: "Lập trình viên",
    createdAt: new Date("2024-05-26T00:00:00Z"),
    updatedAt: new Date("2024-05-26T00:00:00Z"),
  }).onConflictDoNothing();

  // Custom Value for Uncle (Binh nghiệp)
  await db.insert(CustomFieldValue).values({
    id: "val-uncle-mil-id",
    nodeId: "node-uncle-id",
    fieldId: "field-mil-id",
    value: "30 năm biên phòng Sơn La",
  }).onConflictDoNothing();

  // 6. Insert Relationship Edges (Spouses & Parents)
  await db.insert(Edge).values({
    id: "edge-grand-spouse-id",
    sourceId: "node-grandpa-id",
    targetId: "node-grandma-id",
    type: "SPOUSE",
  }).onConflictDoNothing();

  await db.insert(Edge).values({
    id: "edge-parent-spouse-id",
    sourceId: "node-father-id",
    targetId: "node-mother-id",
    type: "SPOUSE",
  }).onConflictDoNothing();

  await db.insert(Edge).values({
    id: "edge-gp-father-id",
    sourceId: "node-grandpa-id",
    targetId: "node-father-id",
    type: "PARENT_CHILD",
  }).onConflictDoNothing();

  await db.insert(Edge).values({
    id: "edge-gp-uncle-id",
    sourceId: "node-grandpa-id",
    targetId: "node-uncle-id",
    type: "PARENT_CHILD",
  }).onConflictDoNothing();

  await db.insert(Edge).values({
    id: "edge-father-self-id",
    sourceId: "node-father-id",
    targetId: "node-self-id",
    type: "PARENT_CHILD",
  }).onConflictDoNothing();

  await db.insert(Edge).values({
    id: "edge-mother-self-id",
    sourceId: "node-mother-id",
    targetId: "node-self-id",
    type: "PARENT_CHILD",
  }).onConflictDoNothing();

  console.log("Seeding completed successfully!");
  if (sqlite) {
    sqlite.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
