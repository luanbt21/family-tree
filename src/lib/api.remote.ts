import { command, getRequestEvent, query } from "$app/server";
import type { DbClient } from "$lib/server/db";
import {
  CustomField,
  CustomFieldValue,
  CustomKinshipTerm,
  Edge,
  Node,
  Tree,
  TreeMember,
} from "$lib/server/db/schema";
import { eq } from "drizzle-orm";
import * as v from "valibot";

// Helper to get request context synchronously
function getContext() {
  const event = getRequestEvent();
  if (!event) throw new Error("Request event not found");
  return {
    db: event.locals.db as DbClient,
    user: event.locals.user,
    session: event.locals.session,
  };
}

// Helper to check user membership and role in a tree
async function checkTreeAccess(
  db: DbClient,
  userId: string,
  treeId: string,
  allowedRoles: string[] = ["OWNER", "EDITOR", "VIEWER"],
) {
  const membership = await db.query.TreeMember.findFirst({
    where: (tm, { and, eq }) => and(eq(tm.treeId, treeId), eq(tm.userId, userId)),
  });
  return membership && allowedRoles.includes(membership.role) ? membership : null;
}

// =========================================================================
// TREES REMOTE FUNCTIONS
// =========================================================================

export const getTrees = query(async () => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const treeMemberships = await db.query.TreeMember.findMany({
    where: (tm, { eq }) => eq(tm.userId, user.id),
    with: { tree: true },
  });
  return treeMemberships.map((mt: any) => ({
    ...mt.tree,
    role: mt.role,
  }));
});

export const createTree = command(v.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { name, description } = payload;
  if (!name) throw new Error("Tree name is required");

  const newTree = await db.transaction(async (tx) => {
    const treeId = crypto.randomUUID();
    const [treeRow] = await tx
      .insert(Tree)
      .values({
        id: treeId,
        name,
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();

    await tx.insert(TreeMember).values({
      id: crypto.randomUUID(),
      treeId,
      userId: user.id,
      role: "OWNER",
      createdAt: new Date(),
    });

    return treeRow;
  });

  return { ...newTree, role: "OWNER" };
});

export const getTree = query(v.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const access = await checkTreeAccess(db, user.id, id);
  if (!access) throw new Error("You do not have access to this family tree.");

  const treeData = await db.query.Tree.findFirst({
    where: (t, { eq }) => eq(t.id, id),
    with: {
      nodes: {
        with: {
          customValues: true,
          relationsAsSource: true,
          relationsAsTarget: true,
        },
      },
      fields: true,
      customTerms: true,
    },
  });

  if (!treeData) throw new Error("Family tree not found.");

  return { tree: treeData, role: access.role };
});

export const deleteTree = command(v.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const access = await checkTreeAccess(db, user.id, id, ["OWNER"]);
  if (!access) throw new Error("Only the tree owner can delete this family tree.");

  await db.delete(Tree).where(eq(Tree.id, id));
  return { success: true, message: "Family tree deleted successfully." };
});

export const getTreeMembers = query(v.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const access = await checkTreeAccess(db, user.id, id);
  if (!access) throw new Error("Access denied.");

  const members = await db.query.TreeMember.findMany({
    where: (tm, { eq }) => eq(tm.treeId, id),
    with: {
      user: {
        columns: {
          id: true,
          name: true,
          email: true,
          image: true,
          username: true,
        },
      },
    },
  });
  return members;
});

export const addTreeMember = command(v.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { id, emailOrUsername, role } = payload;
  const access = await checkTreeAccess(db, user.id, id, ["OWNER"]);
  if (!access) throw new Error("Only the owner can manage collaborations.");

  if (!emailOrUsername) throw new Error("Username or email is required");

  // Find user in system
  const targetUser = await db.query.User.findFirst({
    where: (u, { or, eq }) => or(eq(u.email, emailOrUsername), eq(u.username, emailOrUsername)),
  });

  if (!targetUser) throw new Error("User not found in system.");

  // Check if already member
  const existingMember = await db.query.TreeMember.findFirst({
    where: (tm, { and, eq }) => and(eq(tm.treeId, id), eq(tm.userId, targetUser.id)),
  });
  if (existingMember) throw new Error("User is already a member of this tree.");

  const memberId = crypto.randomUUID();
  await db.insert(TreeMember).values({
    id: memberId,
    treeId: id,
    userId: targetUser.id,
    role,
    createdAt: new Date(),
  });

  const newMember = await db.query.TreeMember.findFirst({
    where: (tm, { eq }) => eq(tm.id, memberId),
    with: {
      user: {
        columns: {
          id: true,
          name: true,
          email: true,
          image: true,
          username: true,
        },
      },
    },
  });

  return newMember;
});

export const updateTreeMember = command(v.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { id, memberId, role } = payload;
  const requesterMembership = await checkTreeAccess(db, user.id, id, ["OWNER"]);
  if (!requesterMembership) throw new Error("Only the owner can update roles.");

  const targetMember = await db.query.TreeMember.findFirst({
    where: (tm, { eq }) => eq(tm.id, memberId),
  });
  if (!targetMember) throw new Error("Collaborator not found.");
  if (targetMember.userId === user.id) throw new Error("You cannot change your own role.");

  const [updated] = await db
    .update(TreeMember)
    .set({ role })
    .where(eq(TreeMember.id, memberId))
    .returning();
  return updated;
});

export const deleteTreeMember = command(v.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { id, memberId } = payload;
  const requesterMembership = await checkTreeAccess(db, user.id, id, ["OWNER"]);
  if (!requesterMembership) throw new Error("Only the owner can remove collaborators.");

  const targetMember = await db.query.TreeMember.findFirst({
    where: (tm, { eq }) => eq(tm.id, memberId),
  });
  if (!targetMember) throw new Error("Collaborator not found.");
  if (targetMember.userId === user.id) throw new Error("You cannot remove yourself.");

  await db.delete(TreeMember).where(eq(TreeMember.id, memberId));
  return { success: true, message: "Collaborator removed successfully." };
});

// =========================================================================
// NODES & EDGES REMOTE FUNCTIONS
// =========================================================================

export const createNode = command(v.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const {
    treeId,
    firstName,
    lastName,
    gender,
    birthDate,
    deathDate,
    lunarBirthDate,
    lunarDeathDate,
    phone,
    email,
    major,
    jobPosition,
    customFields,
  } = payload;

  const access = await checkTreeAccess(db, user.id, treeId, ["OWNER", "EDITOR"]);
  if (!access) throw new Error("You do not have permission to modify this family tree.");

  const nodeId = crypto.randomUUID();
  await db.transaction(async (tx) => {
    await tx.insert(Node).values({
      id: nodeId,
      treeId,
      firstName,
      lastName,
      gender,
      birthDate: new Date(birthDate),
      deathDate: deathDate ? new Date(deathDate) : null,
      lunarBirthDate,
      lunarDeathDate,
      phone,
      email,
      major,
      jobPosition,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (customFields && Array.isArray(customFields)) {
      for (const cf of customFields) {
        if (cf.fieldId && cf.value !== undefined) {
          await tx.insert(CustomFieldValue).values({
            id: crypto.randomUUID(),
            nodeId,
            fieldId: cf.fieldId,
            value: String(cf.value),
          });
        }
      }
    }
  });

  const fullNode = await db.query.Node.findFirst({
    where: (n, { eq }) => eq(n.id, nodeId),
    with: { customValues: true },
  });

  return fullNode;
});

export const updateNode = command(v.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { id, payload: dataPayload } = payload;

  const targetNode = await db.query.Node.findFirst({
    where: (n, { eq }) => eq(n.id, id),
  });
  if (!targetNode) throw new Error("Family member not found.");

  const access = await checkTreeAccess(db, user.id, targetNode.treeId, ["OWNER", "EDITOR"]);
  if (!access) throw new Error("You do not have permission to modify this family tree.");

  const {
    firstName,
    lastName,
    gender,
    birthDate,
    deathDate,
    lunarBirthDate,
    lunarDeathDate,
    phone,
    email,
    major,
    jobPosition,
    customFields,
  } = dataPayload;

  await db.transaction(async (tx) => {
    await tx
      .update(Node)
      .set({
        firstName: firstName !== undefined ? firstName : undefined,
        lastName: lastName !== undefined ? lastName : undefined,
        gender: gender !== undefined ? gender : undefined,
        birthDate: birthDate !== undefined ? new Date(birthDate) : undefined,
        deathDate:
          deathDate !== undefined
            ? deathDate
              ? new Date(deathDate)
              : null
            : undefined,
        lunarBirthDate: lunarBirthDate !== undefined ? lunarBirthDate : undefined,
        lunarDeathDate: lunarDeathDate !== undefined ? lunarDeathDate : undefined,
        phone: phone !== undefined ? phone : undefined,
        email: email !== undefined ? email : undefined,
        major: major !== undefined ? major : undefined,
        jobPosition: jobPosition !== undefined ? jobPosition : undefined,
        updatedAt: new Date(),
      })
      .where(eq(Node.id, id));

    if (customFields && Array.isArray(customFields)) {
      for (const cf of customFields) {
        if (cf.fieldId && cf.value !== undefined) {
          await tx
            .insert(CustomFieldValue)
            .values({
              id: crypto.randomUUID(),
              nodeId: id,
              fieldId: cf.fieldId,
              value: String(cf.value),
            })
            .onConflictDoUpdate({
              target: [CustomFieldValue.nodeId, CustomFieldValue.fieldId],
              set: { value: String(cf.value) },
            });
        }
      }
    }
  });

  const fullNode = await db.query.Node.findFirst({
    where: (n, { eq }) => eq(n.id, id),
    with: { customValues: true },
  });

  return fullNode;
});

export const deleteNode = command(v.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");

  const targetNode = await db.query.Node.findFirst({
    where: (n, { eq }) => eq(n.id, id),
  });
  if (!targetNode) throw new Error("Family member not found.");

  const access = await checkTreeAccess(db, user.id, targetNode.treeId, ["OWNER", "EDITOR"]);
  if (!access) throw new Error("You do not have permission to modify this family tree.");

  await db.delete(Node).where(eq(Node.id, id));
  return { success: true, message: "Member deleted successfully." };
});

export const createEdge = command(v.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { sourceId, targetId, type, order } = payload;

  const sourceNode = await db.query.Node.findFirst({ where: (n, { eq }) => eq(n.id, sourceId) });
  const targetNode = await db.query.Node.findFirst({ where: (n, { eq }) => eq(n.id, targetId) });
  if (!sourceNode || !targetNode) throw new Error("Source or target node not found.");
  if (sourceNode.treeId !== targetNode.treeId)
    throw new Error("Nodes must belong to the same family tree.");

  const access = await checkTreeAccess(db, user.id, sourceNode.treeId, ["OWNER", "EDITOR"]);
  if (!access) throw new Error("You do not have permission to modify this family tree.");

  const existing = await db.query.Edge.findFirst({
    where: (e, { or, and, eq }) =>
      or(
        and(eq(e.sourceId, sourceId), eq(e.targetId, targetId), eq(e.type, type)),
        and(eq(e.sourceId, targetId), eq(e.targetId, sourceId), eq(e.type, type)),
      ),
  });
  if (existing) throw new Error("This relationship already exists.");

  const [edge] = await db
    .insert(Edge)
    .values({
      id: crypto.randomUUID(),
      sourceId,
      targetId,
      type,
      order,
    })
    .returning();

  return edge;
});

export const deleteEdge = command(v.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");

  const targetEdge = await db.query.Edge.findFirst({
    where: (e, { eq }) => eq(e.id, id),
    with: { source: true },
  });
  if (!targetEdge) throw new Error("Relationship not found.");

  const access = await checkTreeAccess(db, user.id, targetEdge.source.treeId, ["OWNER", "EDITOR"]);
  if (!access) throw new Error("You do not have permission to modify this family tree.");

  await db.delete(Edge).where(eq(Edge.id, id));
  return { success: true, message: "Relationship removed successfully." };
});

export const createCustomField = command(v.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { treeId, name, type } = payload;

  const access = await checkTreeAccess(db, user.id, treeId, ["OWNER"]);
  if (!access) throw new Error("Only the tree owner can define custom fields.");

  const [field] = await db
    .insert(CustomField)
    .values({
      id: crypto.randomUUID(),
      treeId,
      name,
      type,
    })
    .returning();

  return field;
});

export const deleteCustomField = command(v.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");

  const field = await db.query.CustomField.findFirst({ where: (cf, { eq }) => eq(cf.id, id) });
  if (!field) throw new Error("Custom field not found.");

  const access = await checkTreeAccess(db, user.id, field.treeId, ["OWNER"]);
  if (!access) throw new Error("Only the tree owner can delete custom fields.");

  await db.delete(CustomField).where(eq(CustomField.id, id));
  return { success: true, message: "Custom field deleted successfully." };
});

export const getKinshipTerms = query(v.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const access = await checkTreeAccess(db, user.id, id, ["OWNER", "EDITOR", "VIEWER"]);
  if (!access) throw new Error("Access denied.");

  const terms = await db.query.CustomKinshipTerm.findMany({
    where: (ckt, { eq }) => eq(ckt.treeId, id),
  });
  return terms;
});

export const saveKinshipTerm = command(v.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { treeId, pathKey, term } = payload;

  const access = await checkTreeAccess(db, user.id, treeId, ["OWNER"]);
  if (!access) throw new Error("Only the tree owner can define custom kinship terms.");

  const existing = await db.query.CustomKinshipTerm.findFirst({
    where: (ckt, { and, eq }) => and(eq(ckt.treeId, treeId), eq(ckt.pathKey, pathKey)),
  });

  if (existing) {
    const [updated] = await db
      .update(CustomKinshipTerm)
      .set({ term })
      .where(eq(CustomKinshipTerm.id, existing.id))
      .returning();
    return updated;
  } else {
    const [created] = await db
      .insert(CustomKinshipTerm)
      .values({
        id: crypto.randomUUID(),
        treeId,
        pathKey,
        term,
      })
      .returning();
    return created;
  }
});

export const deleteKinshipTerm = command(v.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");

  const term = await db.query.CustomKinshipTerm.findFirst({
    where: (ckt, { eq }) => eq(ckt.id, id),
  });
  if (!term) throw new Error("Kinship term override not found.");

  const access = await checkTreeAccess(db, user.id, term.treeId, ["OWNER"]);
  if (!access) throw new Error("Only the tree owner can remove kinship term overrides.");

  await db.delete(CustomKinshipTerm).where(eq(CustomKinshipTerm.id, id));
  return { success: true, message: "Custom kinship term removed successfully." };
});
