import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, parent }) => {
  const { user } = await parent();

  const treeMemberships = await locals.db.treeMember.findMany({
    where: { userId: user.id },
    include: { tree: true },
  });

  return {
    trees: treeMemberships.map((mt: any) => ({
      ...mt.tree,
      role: mt.role,
    })),
  };
};
