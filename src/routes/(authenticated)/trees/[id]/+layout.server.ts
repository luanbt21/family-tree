import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params, locals, parent }) => {
  const { user } = await parent();
  const { id } = params;

  const membership = await locals.db.query.TreeMember.findFirst({
    where: (tm, { and, eq }) => and(eq(tm.treeId, id), eq(tm.userId, user.id)),
  });

  if (!membership) {
    throw error(403, "You do not have access to this family tree.");
  }

  const tree = await locals.db.query.Tree.findFirst({
    where: (t, { eq }) => eq(t.id, id),
    with: {
      members: {
        with: {
          user: true,
        },
      },
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

  if (!tree) {
    throw error(404, "Family tree not found.");
  }

  return {
    tree,
    role: membership.role,
  };
};
