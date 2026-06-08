-- Seed file for local Cloudflare D1 / SQLite database

-- 1. Create a mock user (matching Better Auth format)
INSERT OR IGNORE INTO user (id, name, email, email_verified, role, username, created_at, updated_at)
VALUES (
  'test-user-id',
  'Gia Tộc Admin',
  'admin@example.com',
  1,
  'admin',
  'admin',
  1716681600000, -- timestamp_ms
  1716681600000
);

-- 1.1 Create mock credential account (password is 'password123')
INSERT OR IGNORE INTO account (id, account_id, provider_id, user_id, password, created_at, updated_at)
VALUES (
  'test-account-id',
  'test-user-id',
  'credential',
  'test-user-id',
  '$2a$12$D75g3dM7Q6G7d.6t1eH6EuN5z03dG6e8w8G1eH6EuN5z03dG6e8w8', -- bcrypt hash of 'password123'
  1716681600000,
  1716681600000
);

-- 2. Create a mock family tree
INSERT OR IGNORE INTO tree (id, name, description, created_at, updated_at)
VALUES (
  'test-tree-id',
  'Nguyễn Gia Tộc Phả',
  'Gia phả dòng họ Nguyễn chi thứ ba tại Hà Nội.',
  1716681600, -- timestamp in seconds
  1716681600
);

-- 3. Associate the user to the tree as OWNER
INSERT OR IGNORE INTO tree_member (id, tree_id, user_id, role, created_at)
VALUES (
  'member-owner-id',
  'test-tree-id',
  'test-user-id',
  'OWNER',
  1716681600
);

-- 4. Insert Custom Field definition
INSERT OR IGNORE INTO custom_field (id, tree_id, name, type)
VALUES (
  'field-mil-id',
  'test-tree-id',
  'Binh nghiệp',
  'STRING'
);

-- 5. Insert Family Member Nodes
-- Generation 1 (Grandparents)
INSERT OR IGNORE INTO node (id, tree_id, first_name, last_name, gender, birth_date, death_date, lunar_birth_date, job_position, created_at, updated_at)
VALUES (
  'node-grandpa-id',
  'test-tree-id',
  'An',
  'Nguyễn Văn',
  'MALE',
  -1893456000, -- 1910-01-01
  946684800, -- 2000-01-01
  '01/11 Kỷ Dậu',
  'Nhà Nho',
  1716681600,
  1716681600
);

INSERT OR IGNORE INTO node (id, tree_id, first_name, last_name, gender, birth_date, death_date, lunar_birth_date, created_at, updated_at)
VALUES (
  'node-grandma-id',
  'test-tree-id',
  'Bình',
  'Lê Thị',
  'FEMALE',
  -1735689600, -- 1915-01-01
  1104537600, -- 2005-01-01
  '12/03 Ất Mão',
  1716681600,
  1716681600
);

-- Generation 2 (Parents & Uncle)
INSERT OR IGNORE INTO node (id, tree_id, first_name, last_name, gender, birth_date, phone, job_position, created_at, updated_at)
VALUES (
  'node-father-id',
  'test-tree-id',
  'Cường',
  'Nguyễn Văn',
  'MALE',
  -473040000, -- 1955-01-01
  '0912345678',
  'Kỹ sư',
  1716681600,
  1716681600
);

INSERT OR IGNORE INTO node (id, tree_id, first_name, last_name, gender, birth_date, created_at, updated_at)
VALUES (
  'node-mother-id',
  'test-tree-id',
  'Dung',
  'Trần Thị',
  'FEMALE',
  -378691200, -- 1958-01-01
  1716681600,
  1716681600
);

INSERT OR IGNORE INTO node (id, tree_id, first_name, last_name, gender, birth_date, job_position, created_at, updated_at)
VALUES (
  'node-uncle-id',
  'test-tree-id',
  'Chiến',
  'Nguyễn Văn',
  'MALE',
  -315619200, -- 1960-01-01
  'Đại tá quân đội',
  1716681600,
  1716681600
);

-- Generation 3 (Self)
INSERT OR IGNORE INTO node (id, tree_id, first_name, last_name, gender, birth_date, email, phone, job_position, created_at, updated_at)
VALUES (
  'node-self-id',
  'test-tree-id',
  'Đông',
  'Nguyễn Văn',
  'MALE',
  473040000, -- 1985-01-01
  'dong.nguyen@example.com',
  '0987654321',
  'Lập trình viên',
  1716681600,
  1716681600
);

-- Custom Value for Uncle (Binh nghiệp)
INSERT OR IGNORE INTO custom_field_value (id, node_id, field_id, value)
VALUES (
  'val-uncle-mil-id',
  'node-uncle-id',
  'field-mil-id',
  '30 năm biên phòng Sơn La'
);

-- 6. Insert Relationship Edges (Spouses & Parents)
-- Grandparents Spouse
INSERT OR IGNORE INTO edge (id, source_id, target_id, type)
VALUES (
  'edge-grand-spouse-id',
  'node-grandpa-id',
  'node-grandma-id',
  'SPOUSE'
);

-- Father & Mother Spouse
INSERT OR IGNORE INTO edge (id, source_id, target_id, type)
VALUES (
  'edge-parent-spouse-id',
  'node-father-id',
  'node-mother-id',
  'SPOUSE'
);

-- Parents of Father & Uncle
INSERT OR IGNORE INTO edge (id, source_id, target_id, type)
VALUES (
  'edge-gp-father-id',
  'node-grandpa-id',
  'node-father-id',
  'PARENT_CHILD'
);

INSERT OR IGNORE INTO edge (id, source_id, target_id, type)
VALUES (
  'edge-gp-uncle-id',
  'node-grandpa-id',
  'node-uncle-id',
  'PARENT_CHILD'
);

-- Parents of Self
INSERT OR IGNORE INTO edge (id, source_id, target_id, type)
VALUES (
  'edge-father-self-id',
  'node-father-id',
  'node-self-id',
  'PARENT_CHILD'
);

INSERT OR IGNORE INTO edge (id, source_id, target_id, type)
VALUES (
  'edge-mother-self-id',
  'node-mother-id',
  'node-self-id',
  'PARENT_CHILD'
);
