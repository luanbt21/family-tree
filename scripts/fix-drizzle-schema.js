import fs from "fs";
import path from "path";

const schemaPath = path.resolve("src/lib/server/db/schema.ts");

if (!fs.existsSync(schemaPath)) {
  console.error(`Schema file not found at ${schemaPath}`);
  process.exit(1);
}

let content = fs.readFileSync(schemaPath, "utf-8");

// 1. Replace numeric import with integer
content = content.replace(
  /import\s+{[^}]*\bnumeric\b[^}]*}\s+from\s+['"]drizzle-orm\/sqlite-core['"]/g,
  (match) => match.replace(/\bnumeric\b/g, "integer")
);

// 2. Replace numeric columns with default date('now') to integer with timestamp_ms and strftime millisecond default
content = content.replace(
  /numeric\((['"][a-zA-Z_]+['"])\)\.notNull\(\)\.default\(sql`DATE\('now'\)`\)/g,
  "integer($1, { mode: 'timestamp_ms' }).notNull().default(sql`(strftime('%s', 'now') * 1000)`)"
);

content = content.replace(
  /numeric\((['"][a-zA-Z_]+['"])\)\.notNull\(\)\.default\(sql`DATE\('now'\)`\)/g, // handles double matched if any
  "integer($1, { mode: 'timestamp_ms' }).notNull().default(sql`(strftime('%s', 'now') * 1000)`)"
);

// 3. Replace all remaining numeric columns to integer with timestamp_ms mode
content = content.replace(
  /numeric\((['"][a-zA-Z_]+['"])\)/g,
  "integer($1, { mode: 'timestamp_ms' })"
);

fs.writeFileSync(schemaPath, content, "utf-8");
console.log("Successfully fixed schema.ts datetimes for SQLite D1!");
