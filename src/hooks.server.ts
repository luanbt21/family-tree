import { building } from "$app/environment";
import { getTextDirection } from "$lib/paraglide/runtime";
import { paraglideMiddleware } from "$lib/paraglide/server";
import { createAuth } from "$lib/server/auth";
import { getDb } from "$lib/server/db";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { svelteKitHandler } from "better-auth/svelte-kit";

const handleParaglide: Handle = ({ event, resolve }) =>
  paraglideMiddleware(event.request, ({ request, locale }: any) => {
    event.request = request;

    return resolve(event, {
      transformPageChunk: ({ html }) =>
        html
          .replace("%paraglide.lang%", locale)
          .replace("%paraglide.dir%", getTextDirection(locale)),
    });
  });

const handleBetterAuth: Handle = async ({ event, resolve }) => {
  if (!event.platform?.env?.DB)
    throw new Error('D1 binding "DB" not found - are you running with wrangler?');

  const db = getDb(event.platform.env.DB);
  event.locals.db = db;
  event.locals.auth = createAuth(event.platform.env.DB, event.url.origin);

  const { auth } = event.locals;
  const session = await auth.api.getSession({ headers: event.request.headers });

  if (session) {
    event.locals.session = session.session;
    event.locals.user = session.user;
  }

  return svelteKitHandler({ event, resolve, auth, building });
};

export const handle: Handle = sequence(handleParaglide, handleBetterAuth);
