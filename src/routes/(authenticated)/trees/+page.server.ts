import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, parent }) => {
  const { user } = await parent();

  const treeMemberships = await locals.db.query.TreeMember.findMany({
    where: (tm, { eq }) => eq(tm.userId, user.id),
    with: { tree: true },
  });

  return {
    trees: treeMemberships.map((mt: any) => ({
      ...mt.tree,
      role: mt.role,
    })),
  };
};
