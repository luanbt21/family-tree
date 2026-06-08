import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals, url }) => {
  if (!locals.session || !locals.user) {
    const fromUrl = url.pathname + url.search;
    throw redirect(302, `/login?redirect=${encodeURIComponent(fromUrl)}`);
  }

  return {
    user: locals.user,
    session: locals.session,
  };
};
