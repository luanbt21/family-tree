import { query, command, getRequestEvent } from "$app/server";
import { z } from "zod";
import type { PrismaClient } from "$lib/generated/prisma";

// Helper to get request context synchronously
function getContext() {
  const event = getRequestEvent();
  if (!event) throw new Error("Request event not found");
  return {
    db: event.locals.db as PrismaClient,
    user: event.locals.user,
    session: event.locals.session,
  };
}

// Helper to check user membership and role in a tree
async function checkTreeAccess(
  db: PrismaClient,
  userId: string,
  treeId: string,
  allowedRoles: string[] = ["OWNER", "EDITOR", "VIEWER"],
) {
  const membership = await db.treeMember.findFirst({
    where: { treeId, userId },
  });
  return membership && allowedRoles.includes(membership.role) ? membership : null;
}

// =========================================================================
// TREES REMOTE FUNCTIONS
// =========================================================================

export const getTrees = query(async () => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const treeMemberships = await db.treeMember.findMany({
    where: { userId: user.id },
    include: { tree: true },
  });
  return treeMemberships.map((mt: any) => ({
    ...mt.tree,
    role: mt.role,
  }));
});

export const createTree = command(z.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { name, description } = payload;
  if (!name) throw new Error("Tree name is required");

  const newTree = await db.tree.create({
    data: {
      name,
      description,
      members: {
        create: {
          userId: user.id,
          role: "OWNER",
        },
      },
    },
  });

  return { ...newTree, role: "OWNER" };
});

export const getTree = query(z.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const access = await checkTreeAccess(db, user.id, id);
  if (!access) throw new Error("You do not have access to this family tree.");

  const treeData = await db.tree.findUnique({
    where: { id },
    include: {
      nodes: {
        include: {
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

export const deleteTree = command(z.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const access = await checkTreeAccess(db, user.id, id, ["OWNER"]);
  if (!access) throw new Error("Only the tree owner can delete this family tree.");

  await db.tree.delete({ where: { id } });
  return { success: true, message: "Family tree deleted successfully." };
});

export const getTreeMembers = query(z.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const access = await checkTreeAccess(db, user.id, id);
  if (!access) throw new Error("Access denied.");

  const members = await db.treeMember.findMany({
    where: { treeId: id },
    include: {
      user: {
        select: {
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

export const addTreeMember = command(z.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { id, emailOrUsername, role } = payload;
  const access = await checkTreeAccess(db, user.id, id, ["OWNER"]);
  if (!access) throw new Error("Only the owner can manage collaborations.");

  if (!emailOrUsername) throw new Error("Username or email is required");

  // Find user in system
  const targetUser = await db.user.findFirst({
    where: {
      OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
    },
  });

  if (!targetUser) throw new Error("User not found in system.");

  // Check if already member
  const existingMember = await db.treeMember.findFirst({
    where: { treeId: id, userId: targetUser.id },
  });
  if (existingMember) throw new Error("User is already a member of this tree.");

  const newMember = await db.treeMember.create({
    data: {
      treeId: id,
      userId: targetUser.id,
      role,
    },
    include: {
      user: {
        select: {
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

export const updateTreeMember = command(z.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { id, memberId, role } = payload;
  const requesterMembership = await checkTreeAccess(db, user.id, id, ["OWNER"]);
  if (!requesterMembership) throw new Error("Only the owner can update roles.");

  const targetMember = await db.treeMember.findUnique({
    where: { id: memberId },
  });
  if (!targetMember) throw new Error("Collaborator not found.");
  if (targetMember.userId === user.id) throw new Error("You cannot change your own role.");

  const updated = await db.treeMember.update({
    where: { id: memberId },
    data: { role },
  });
  return updated;
});

export const deleteTreeMember = command(z.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { id, memberId } = payload;
  const requesterMembership = await checkTreeAccess(db, user.id, id, ["OWNER"]);
  if (!requesterMembership) throw new Error("Only the owner can remove collaborators.");

  const targetMember = await db.treeMember.findUnique({
    where: { id: memberId },
  });
  if (!targetMember) throw new Error("Collaborator not found.");
  if (targetMember.userId === user.id) throw new Error("You cannot remove yourself.");

  await db.treeMember.delete({ where: { id: memberId } });
  return { success: true, message: "Collaborator removed successfully." };
});

// =========================================================================
// NODES & EDGES REMOTE FUNCTIONS
// =========================================================================

export const createNode = command(z.any(), async (payload: any) => {
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

  const node = await db.node.create({
    data: {
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
    },
  });

  if (customFields && Array.isArray(customFields)) {
    for (const cf of customFields) {
      if (cf.fieldId && cf.value !== undefined) {
        await db.customFieldValue.create({
          data: {
            nodeId: node.id,
            fieldId: cf.fieldId,
            value: String(cf.value),
          },
        });
      }
    }
  }

  const fullNode = await db.node.findUnique({
    where: { id: node.id },
    include: { customValues: true },
  });

  return fullNode;
});

export const updateNode = command(z.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { id, payload: dataPayload } = payload;

  const targetNode = await db.node.findUnique({ where: { id } });
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

  await db.node.update({
    where: { id },
    data: {
      firstName: firstName !== undefined ? firstName : undefined,
      lastName: lastName !== undefined ? lastName : undefined,
      gender: gender !== undefined ? gender : undefined,
      birthDate: birthDate !== undefined ? new Date(birthDate) : undefined,
      deathDate: deathDate !== undefined ? (deathDate ? new Date(deathDate) : null) : undefined,
      lunarBirthDate: lunarBirthDate !== undefined ? lunarBirthDate : undefined,
      lunarDeathDate: lunarDeathDate !== undefined ? lunarDeathDate : undefined,
      phone: phone !== undefined ? phone : undefined,
      email: email !== undefined ? email : undefined,
      major: major !== undefined ? major : undefined,
      jobPosition: jobPosition !== undefined ? jobPosition : undefined,
    },
  });

  if (customFields && Array.isArray(customFields)) {
    for (const cf of customFields) {
      if (cf.fieldId && cf.value !== undefined) {
        await db.customFieldValue.upsert({
          where: {
            nodeId_fieldId: {
              nodeId: id,
              fieldId: cf.fieldId,
            },
          },
          update: { value: String(cf.value) },
          create: {
            nodeId: id,
            fieldId: cf.fieldId,
            value: String(cf.value),
          },
        });
      }
    }
  }

  const fullNode = await db.node.findUnique({
    where: { id },
    include: { customValues: true },
  });

  return fullNode;
});

export const deleteNode = command(z.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");

  const targetNode = await db.node.findUnique({ where: { id } });
  if (!targetNode) throw new Error("Family member not found.");

  const access = await checkTreeAccess(db, user.id, targetNode.treeId, ["OWNER", "EDITOR"]);
  if (!access) throw new Error("You do not have permission to modify this family tree.");

  await db.node.delete({ where: { id } });
  return { success: true, message: "Member deleted successfully." };
});

export const createEdge = command(z.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { sourceId, targetId, type, order } = payload;

  const sourceNode = await db.node.findUnique({ where: { id: sourceId } });
  const targetNode = await db.node.findUnique({ where: { id: targetId } });
  if (!sourceNode || !targetNode) throw new Error("Source or target node not found.");
  if (sourceNode.treeId !== targetNode.treeId)
    throw new Error("Nodes must belong to the same family tree.");

  const access = await checkTreeAccess(db, user.id, sourceNode.treeId, ["OWNER", "EDITOR"]);
  if (!access) throw new Error("You do not have permission to modify this family tree.");

  const existing = await db.edge.findFirst({
    where: {
      OR: [
        { sourceId, targetId, type },
        { sourceId: targetId, targetId: sourceId, type },
      ],
    },
  });
  if (existing) throw new Error("This relationship already exists.");

  return await db.edge.create({
    data: {
      sourceId,
      targetId,
      type,
      order,
    },
  });
});

export const deleteEdge = command(z.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");

  const targetEdge = await db.edge.findUnique({
    where: { id },
    include: { source: true },
  });
  if (!targetEdge) throw new Error("Relationship not found.");

  const access = await checkTreeAccess(db, user.id, targetEdge.source.treeId, ["OWNER", "EDITOR"]);
  if (!access) throw new Error("You do not have permission to modify this family tree.");

  await db.edge.delete({ where: { id } });
  return { success: true, message: "Relationship removed successfully." };
});

export const createCustomField = command(z.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { treeId, name, type } = payload;

  const access = await checkTreeAccess(db, user.id, treeId, ["OWNER"]);
  if (!access) throw new Error("Only the tree owner can define custom fields.");

  return await db.customField.create({
    data: {
      treeId,
      name,
      type,
    },
  });
});

export const deleteCustomField = command(z.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");

  const field = await db.customField.findUnique({ where: { id } });
  if (!field) throw new Error("Custom field not found.");

  const access = await checkTreeAccess(db, user.id, field.treeId, ["OWNER"]);
  if (!access) throw new Error("Only the tree owner can delete custom fields.");

  await db.customField.delete({ where: { id } });
  return { success: true, message: "Custom field deleted successfully." };
});

export const getKinshipTerms = query(z.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const access = await checkTreeAccess(db, user.id, id, ["OWNER", "EDITOR", "VIEWER"]);
  if (!access) throw new Error("Access denied.");

  const terms = await db.customKinshipTerm.findMany({
    where: { treeId: id },
  });
  return terms;
});

export const saveKinshipTerm = command(z.any(), async (payload: any) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");
  const { treeId, pathKey, term } = payload;

  const access = await checkTreeAccess(db, user.id, treeId, ["OWNER"]);
  if (!access) throw new Error("Only the tree owner can define custom kinship terms.");

  const existing = await db.customKinshipTerm.findFirst({
    where: { treeId, pathKey },
  });

  if (existing) {
    return await db.customKinshipTerm.update({
      where: { id: existing.id },
      data: { term },
    });
  } else {
    return await db.customKinshipTerm.create({
      data: { treeId, pathKey, term },
    });
  }
});

export const deleteKinshipTerm = command(z.string(), async (id: string) => {
  const { db, user } = getContext();
  if (!user) throw new Error("Unauthorized");

  const term = await db.customKinshipTerm.findUnique({ where: { id } });
  if (!term) throw new Error("Kinship term override not found.");

  const access = await checkTreeAccess(db, user.id, term.treeId, ["OWNER"]);
  if (!access) throw new Error("Only the tree owner can remove kinship term overrides.");

  await db.customKinshipTerm.delete({ where: { id } });
  return { success: true, message: "Custom kinship term removed successfully." };
});
