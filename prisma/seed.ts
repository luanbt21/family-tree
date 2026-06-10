import { PrismaClient } from "../src/lib/generated/prisma";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const databaseUrl = process.env.DATABASE_URL || "file:./dev.db";

const adapter = new PrismaBetterSqlite3({ url: databaseUrl });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // 1. Create a mock user (matching Better Auth format)
  const user = await prisma.user.upsert({
    where: { id: "test-user-id" },
    update: {},
    create: {
      id: "test-user-id",
      name: "Gia Tộc Admin",
      email: "admin@example.com",
      emailVerified: true,
      role: "admin",
      username: "admin",
      createdAt: new Date("2024-05-26T00:00:00Z"),
      updatedAt: new Date("2024-05-26T00:00:00Z"),
    },
  });

  // 1.1 Create mock credential account (password is 'password123')
  await prisma.account.upsert({
    where: { id: "test-account-id" },
    update: {},
    create: {
      id: "test-account-id",
      accountId: "test-user-id",
      providerId: "credential",
      userId: "test-user-id",
      password: "$2a$12$D75g3dM7Q6G7d.6t1eH6EuN5z03dG6e8w8G1eH6EuN5z03dG6e8w8", // bcrypt hash of 'password123'
      createdAt: new Date("2024-05-26T00:00:00Z"),
      updatedAt: new Date("2024-05-26T00:00:00Z"),
    },
  });

  // 2. Create a mock family tree
  const tree = await prisma.tree.upsert({
    where: { id: "test-tree-id" },
    update: {},
    create: {
      id: "test-tree-id",
      name: "Nguyễn Gia Tộc Phả",
      description: "Gia phả dòng họ Nguyễn chi thứ ba tại Hà Nội.",
      createdAt: new Date("2024-05-26T00:00:00Z"),
      updatedAt: new Date("2024-05-26T00:00:00Z"),
    },
  });

  // 3. Associate the user to the tree as OWNER
  await prisma.treeMember.upsert({
    where: { treeId_userId: { treeId: "test-tree-id", userId: "test-user-id" } },
    update: {},
    create: {
      id: "member-owner-id",
      treeId: "test-tree-id",
      userId: "test-user-id",
      role: "OWNER",
      createdAt: new Date("2024-05-26T00:00:00Z"),
    },
  });

  // 4. Insert Custom Field definition
  await prisma.customField.upsert({
    where: { treeId_name: { treeId: "test-tree-id", name: "Binh nghiệp" } },
    update: {},
    create: {
      id: "field-mil-id",
      treeId: "test-tree-id",
      name: "Binh nghiệp",
      type: "STRING",
    },
  });

  // 5. Insert Family Member Nodes
  // Generation 1 (Grandparents)
  await prisma.node.upsert({
    where: { id: "node-grandpa-id" },
    update: {},
    create: {
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
    },
  });

  await prisma.node.upsert({
    where: { id: "node-grandma-id" },
    update: {},
    create: {
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
    },
  });

  // Generation 2 (Parents & Uncle)
  await prisma.node.upsert({
    where: { id: "node-father-id" },
    update: {},
    create: {
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
    },
  });

  await prisma.node.upsert({
    where: { id: "node-mother-id" },
    update: {},
    create: {
      id: "node-mother-id",
      treeId: "test-tree-id",
      firstName: "Dung",
      lastName: "Trần Thị",
      gender: "FEMALE",
      birthDate: new Date("1958-01-01T00:00:00Z"),
      createdAt: new Date("2024-05-26T00:00:00Z"),
      updatedAt: new Date("2024-05-26T00:00:00Z"),
    },
  });

  await prisma.node.upsert({
    where: { id: "node-uncle-id" },
    update: {},
    create: {
      id: "node-uncle-id",
      treeId: "test-tree-id",
      firstName: "Chiến",
      lastName: "Nguyễn Văn",
      gender: "MALE",
      birthDate: new Date("1960-01-01T00:00:00Z"),
      jobPosition: "Đại tá quân đội",
      createdAt: new Date("2024-05-26T00:00:00Z"),
      updatedAt: new Date("2024-05-26T00:00:00Z"),
    },
  });

  // Generation 3 (Self)
  await prisma.node.upsert({
    where: { id: "node-self-id" },
    update: {},
    create: {
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
    },
  });

  // Custom Value for Uncle (Binh nghiệp)
  await prisma.customFieldValue.upsert({
    where: { nodeId_fieldId: { nodeId: "node-uncle-id", fieldId: "field-mil-id" } },
    update: {},
    create: {
      id: "val-uncle-mil-id",
      nodeId: "node-uncle-id",
      fieldId: "field-mil-id",
      value: "30 năm biên phòng Sơn La",
    },
  });

  // 6. Insert Relationship Edges (Spouses & Parents)
  await prisma.edge.upsert({
    where: {
      sourceId_targetId_type: {
        sourceId: "node-grandpa-id",
        targetId: "node-grandma-id",
        type: "SPOUSE",
      },
    },
    update: {},
    create: {
      id: "edge-grand-spouse-id",
      sourceId: "node-grandpa-id",
      targetId: "node-grandma-id",
      type: "SPOUSE",
    },
  });

  await prisma.edge.upsert({
    where: {
      sourceId_targetId_type: {
        sourceId: "node-father-id",
        targetId: "node-mother-id",
        type: "SPOUSE",
      },
    },
    update: {},
    create: {
      id: "edge-parent-spouse-id",
      sourceId: "node-father-id",
      targetId: "node-mother-id",
      type: "SPOUSE",
    },
  });

  await prisma.edge.upsert({
    where: {
      sourceId_targetId_type: {
        sourceId: "node-grandpa-id",
        targetId: "node-father-id",
        type: "PARENT_CHILD",
      },
    },
    update: {},
    create: {
      id: "edge-gp-father-id",
      sourceId: "node-grandpa-id",
      targetId: "node-father-id",
      type: "PARENT_CHILD",
    },
  });

  await prisma.edge.upsert({
    where: {
      sourceId_targetId_type: {
        sourceId: "node-grandpa-id",
        targetId: "node-uncle-id",
        type: "PARENT_CHILD",
      },
    },
    update: {},
    create: {
      id: "edge-gp-uncle-id",
      sourceId: "node-grandpa-id",
      targetId: "node-uncle-id",
      type: "PARENT_CHILD",
    },
  });

  await prisma.edge.upsert({
    where: {
      sourceId_targetId_type: {
        sourceId: "node-father-id",
        targetId: "node-self-id",
        type: "PARENT_CHILD",
      },
    },
    update: {},
    create: {
      id: "edge-father-self-id",
      sourceId: "node-father-id",
      targetId: "node-self-id",
      type: "PARENT_CHILD",
    },
  });

  await prisma.edge.upsert({
    where: {
      sourceId_targetId_type: {
        sourceId: "node-mother-id",
        targetId: "node-self-id",
        type: "PARENT_CHILD",
      },
    },
    update: {},
    create: {
      id: "edge-mother-self-id",
      sourceId: "node-mother-id",
      targetId: "node-self-id",
      type: "PARENT_CHILD",
    },
  });

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
