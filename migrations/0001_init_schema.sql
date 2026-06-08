-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "role" TEXT DEFAULT 'user',
    "banned" BOOLEAN DEFAULT false,
    "ban_reason" TEXT,
    "ban_expires" DATETIME,
    "is_anonymous" BOOLEAN DEFAULT false,
    "username" TEXT,
    "display_username" TEXT,
    "lang" TEXT DEFAULT 'en',
    "phone_number" TEXT,
    "phone_number_verified" BOOLEAN
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expires_at" DATETIME NOT NULL,
    "token" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "ip_address" TEXT,
    "user_agent" TEXT,
    "user_id" TEXT NOT NULL,
    "impersonated_by" TEXT,
    CONSTRAINT "session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "account_id" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "access_token" TEXT,
    "refresh_token" TEXT,
    "id_token" TEXT,
    "access_token_expires_at" DATETIME,
    "refresh_token_expires_at" DATETIME,
    "scope" TEXT,
    "password" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expires_at" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "tree" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "tree_member" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tree_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "tree_member_tree_id_fkey" FOREIGN KEY ("tree_id") REFERENCES "tree" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "tree_member_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "node" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tree_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "gender" TEXT NOT NULL,
    "id_card_number" TEXT,
    "birth_date" DATETIME NOT NULL,
    "death_date" DATETIME,
    "lunar_birth_date" TEXT,
    "lunar_death_date" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "major" TEXT,
    "job_position" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "node_tree_id_fkey" FOREIGN KEY ("tree_id") REFERENCES "tree" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "custom_field" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tree_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "custom_field_tree_id_fkey" FOREIGN KEY ("tree_id") REFERENCES "tree" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "custom_field_value" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "node_id" TEXT NOT NULL,
    "field_id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "custom_field_value_node_id_fkey" FOREIGN KEY ("node_id") REFERENCES "node" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "custom_field_value_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "custom_field" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "custom_kinship_term" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tree_id" TEXT NOT NULL,
    "path_key" TEXT NOT NULL,
    "term" TEXT NOT NULL,
    CONSTRAINT "custom_kinship_term_tree_id_fkey" FOREIGN KEY ("tree_id") REFERENCES "tree" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "edge" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "source_id" TEXT NOT NULL,
    "target_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "order" INTEGER,
    "metadata" TEXT,
    CONSTRAINT "edge_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "node" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "edge_target_id_fkey" FOREIGN KEY ("target_id") REFERENCES "node" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_number_key" ON "user"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- CreateIndex
CREATE INDEX "session_user_id_idx" ON "session"("user_id");

-- CreateIndex
CREATE INDEX "account_user_id_idx" ON "account"("user_id");

-- CreateIndex
CREATE INDEX "verification_identifier_idx" ON "verification"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "tree_member_tree_id_user_id_key" ON "tree_member"("tree_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "custom_field_tree_id_name_key" ON "custom_field"("tree_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "custom_field_value_node_id_field_id_key" ON "custom_field_value"("node_id", "field_id");

-- CreateIndex
CREATE UNIQUE INDEX "custom_kinship_term_tree_id_path_key_key" ON "custom_kinship_term"("tree_id", "path_key");

-- CreateIndex
CREATE UNIQUE INDEX "edge_source_id_target_id_type_key" ON "edge"("source_id", "target_id", "type");

