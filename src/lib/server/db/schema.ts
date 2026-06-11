import { relations, sql } from 'drizzle-orm'
import { foreignKey, int, integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core'

export const User = sqliteTable('user', {
	id: text('id').notNull().primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull().unique(),
	emailVerified: int('email_verified', { mode: 'boolean' }).notNull(),
	image: text('image'),
	createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(strftime('%s', 'now') * 1000)`),
	updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
	role: text('role').default("user"),
	banned: int('banned', { mode: 'boolean' }),
	banReason: text('ban_reason'),
	banExpires: integer('ban_expires', { mode: 'timestamp_ms' }),
	isAnonymous: int('is_anonymous', { mode: 'boolean' }),
	username: text('username').unique(),
	displayUsername: text('display_username'),
	lang: text('lang').default("en"),
	phoneNumber: text('phone_number').unique(),
	phoneNumberVerified: int('phone_number_verified', { mode: 'boolean' })
});

export const Session = sqliteTable('session', {
	id: text('id').notNull().primaryKey(),
	expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
	token: text('token').notNull().unique(),
	createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(strftime('%s', 'now') * 1000)`),
	updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
	ipAddress: text('ip_address'),
	userAgent: text('user_agent'),
	userId: text('user_id').notNull(),
	impersonatedBy: text('impersonated_by')
}, (Session) => ({
	'session_user_fkey': foreignKey({
		name: 'session_user_fkey',
		columns: [Session.userId],
		foreignColumns: [User.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade')
}));

export const Account = sqliteTable('account', {
	id: text('id').notNull().primaryKey(),
	accountId: text('account_id').notNull(),
	providerId: text('provider_id').notNull(),
	userId: text('user_id').notNull(),
	accessToken: text('access_token'),
	refreshToken: text('refresh_token'),
	idToken: text('id_token'),
	accessTokenExpiresAt: integer('access_token_expires_at', { mode: 'timestamp_ms' }),
	refreshTokenExpiresAt: integer('refresh_token_expires_at', { mode: 'timestamp_ms' }),
	scope: text('scope'),
	password: text('password'),
	createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(strftime('%s', 'now') * 1000)`),
	updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull()
}, (Account) => ({
	'account_user_fkey': foreignKey({
		name: 'account_user_fkey',
		columns: [Account.userId],
		foreignColumns: [User.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade')
}));

export const Verification = sqliteTable('verification', {
	id: text('id').notNull().primaryKey(),
	identifier: text('identifier').notNull(),
	value: text('value').notNull(),
	expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
	createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(strftime('%s', 'now') * 1000)`),
	updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull()
});

export const Tree = sqliteTable('tree', {
	id: text('id').notNull().primaryKey().default(sql`uuid(4)`),
	name: text('name').notNull(),
	description: text('description'),
	createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(strftime('%s', 'now') * 1000)`),
	updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull()
});

export const TreeMember = sqliteTable('tree_member', {
	id: text('id').notNull().primaryKey().default(sql`uuid(4)`),
	treeId: text('tree_id').notNull(),
	userId: text('user_id').notNull(),
	role: text('role').notNull(),
	createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(strftime('%s', 'now') * 1000)`)
}, (TreeMember) => ({
	'tree_member_tree_fkey': foreignKey({
		name: 'tree_member_tree_fkey',
		columns: [TreeMember.treeId],
		foreignColumns: [Tree.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade'),
	'tree_member_user_fkey': foreignKey({
		name: 'tree_member_user_fkey',
		columns: [TreeMember.userId],
		foreignColumns: [User.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade'),
	'TreeMember_treeId_userId_unique_idx': uniqueIndex('TreeMember_treeId_userId_key')
		.on(TreeMember.treeId, TreeMember.userId)
}));

export const Node = sqliteTable('node', {
	id: text('id').notNull().primaryKey().default(sql`uuid(4)`),
	treeId: text('tree_id').notNull(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name'),
	gender: text('gender').notNull(),
	idCardNumber: text('id_card_number'),
	birthDate: integer('birth_date', { mode: 'timestamp_ms' }).notNull(),
	deathDate: integer('death_date', { mode: 'timestamp_ms' }),
	lunarBirthDate: text('lunar_birth_date'),
	lunarDeathDate: text('lunar_death_date'),
	phone: text('phone'),
	email: text('email'),
	major: text('major'),
	jobPosition: text('job_position'),
	createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(strftime('%s', 'now') * 1000)`),
	updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull()
}, (Node) => ({
	'node_tree_fkey': foreignKey({
		name: 'node_tree_fkey',
		columns: [Node.treeId],
		foreignColumns: [Tree.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade')
}));

export const CustomField = sqliteTable('custom_field', {
	id: text('id').notNull().primaryKey().default(sql`uuid(4)`),
	treeId: text('tree_id').notNull(),
	name: text('name').notNull(),
	type: text('type').notNull()
}, (CustomField) => ({
	'custom_field_tree_fkey': foreignKey({
		name: 'custom_field_tree_fkey',
		columns: [CustomField.treeId],
		foreignColumns: [Tree.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade'),
	'CustomField_treeId_name_unique_idx': uniqueIndex('CustomField_treeId_name_key')
		.on(CustomField.treeId, CustomField.name)
}));

export const CustomFieldValue = sqliteTable('custom_field_value', {
	id: text('id').notNull().primaryKey().default(sql`uuid(4)`),
	nodeId: text('node_id').notNull(),
	fieldId: text('field_id').notNull(),
	value: text('value').notNull()
}, (CustomFieldValue) => ({
	'custom_field_value_node_fkey': foreignKey({
		name: 'custom_field_value_node_fkey',
		columns: [CustomFieldValue.nodeId],
		foreignColumns: [Node.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade'),
	'custom_field_value_field_fkey': foreignKey({
		name: 'custom_field_value_field_fkey',
		columns: [CustomFieldValue.fieldId],
		foreignColumns: [CustomField.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade'),
	'CustomFieldValue_nodeId_fieldId_unique_idx': uniqueIndex('CustomFieldValue_nodeId_fieldId_key')
		.on(CustomFieldValue.nodeId, CustomFieldValue.fieldId)
}));

export const CustomKinshipTerm = sqliteTable('custom_kinship_term', {
	id: text('id').notNull().primaryKey().default(sql`uuid(4)`),
	treeId: text('tree_id').notNull(),
	pathKey: text('path_key').notNull(),
	term: text('term').notNull()
}, (CustomKinshipTerm) => ({
	'custom_kinship_term_tree_fkey': foreignKey({
		name: 'custom_kinship_term_tree_fkey',
		columns: [CustomKinshipTerm.treeId],
		foreignColumns: [Tree.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade'),
	'CustomKinshipTerm_treeId_pathKey_unique_idx': uniqueIndex('CustomKinshipTerm_treeId_pathKey_key')
		.on(CustomKinshipTerm.treeId, CustomKinshipTerm.pathKey)
}));

export const Edge = sqliteTable('edge', {
	id: text('id').notNull().primaryKey().default(sql`uuid(4)`),
	sourceId: text('source_id').notNull(),
	targetId: text('target_id').notNull(),
	type: text('type').notNull(),
	order: int('order'),
	metadata: text('metadata')
}, (Edge) => ({
	'edge_source_fkey': foreignKey({
		name: 'edge_source_fkey',
		columns: [Edge.sourceId],
		foreignColumns: [Node.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade'),
	'edge_target_fkey': foreignKey({
		name: 'edge_target_fkey',
		columns: [Edge.targetId],
		foreignColumns: [Node.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade'),
	'Edge_sourceId_targetId_type_unique_idx': uniqueIndex('Edge_sourceId_targetId_type_key')
		.on(Edge.sourceId, Edge.targetId, Edge.type)
}));

export const UserRelations = relations(User, ({ many }) => ({
	sessions: many(Session, {
		relationName: 'SessionToUser'
	}),
	accounts: many(Account, {
		relationName: 'AccountToUser'
	}),
	trees: many(TreeMember, {
		relationName: 'TreeMemberToUser'
	})
}));

export const SessionRelations = relations(Session, ({ one }) => ({
	user: one(User, {
		relationName: 'SessionToUser',
		fields: [Session.userId],
		references: [User.id]
	})
}));

export const AccountRelations = relations(Account, ({ one }) => ({
	user: one(User, {
		relationName: 'AccountToUser',
		fields: [Account.userId],
		references: [User.id]
	})
}));

export const TreeRelations = relations(Tree, ({ many }) => ({
	members: many(TreeMember, {
		relationName: 'TreeToTreeMember'
	}),
	nodes: many(Node, {
		relationName: 'NodeToTree'
	}),
	fields: many(CustomField, {
		relationName: 'CustomFieldToTree'
	}),
	customTerms: many(CustomKinshipTerm, {
		relationName: 'CustomKinshipTermToTree'
	})
}));

export const TreeMemberRelations = relations(TreeMember, ({ one }) => ({
	tree: one(Tree, {
		relationName: 'TreeToTreeMember',
		fields: [TreeMember.treeId],
		references: [Tree.id]
	}),
	user: one(User, {
		relationName: 'TreeMemberToUser',
		fields: [TreeMember.userId],
		references: [User.id]
	})
}));

export const NodeRelations = relations(Node, ({ one, many }) => ({
	tree: one(Tree, {
		relationName: 'NodeToTree',
		fields: [Node.treeId],
		references: [Tree.id]
	}),
	customValues: many(CustomFieldValue, {
		relationName: 'CustomFieldValueToNode'
	}),
	relationsAsSource: many(Edge, {
		relationName: 'SourceNode'
	}),
	relationsAsTarget: many(Edge, {
		relationName: 'TargetNode'
	})
}));

export const CustomFieldRelations = relations(CustomField, ({ one, many }) => ({
	tree: one(Tree, {
		relationName: 'CustomFieldToTree',
		fields: [CustomField.treeId],
		references: [Tree.id]
	}),
	values: many(CustomFieldValue, {
		relationName: 'CustomFieldToCustomFieldValue'
	})
}));

export const CustomFieldValueRelations = relations(CustomFieldValue, ({ one }) => ({
	node: one(Node, {
		relationName: 'CustomFieldValueToNode',
		fields: [CustomFieldValue.nodeId],
		references: [Node.id]
	}),
	field: one(CustomField, {
		relationName: 'CustomFieldToCustomFieldValue',
		fields: [CustomFieldValue.fieldId],
		references: [CustomField.id]
	})
}));

export const CustomKinshipTermRelations = relations(CustomKinshipTerm, ({ one }) => ({
	tree: one(Tree, {
		relationName: 'CustomKinshipTermToTree',
		fields: [CustomKinshipTerm.treeId],
		references: [Tree.id]
	})
}));

export const EdgeRelations = relations(Edge, ({ one }) => ({
	source: one(Node, {
		relationName: 'SourceNode',
		fields: [Edge.sourceId],
		references: [Node.id]
	}),
	target: one(Node, {
		relationName: 'TargetNode',
		fields: [Edge.targetId],
		references: [Node.id]
	})
}));