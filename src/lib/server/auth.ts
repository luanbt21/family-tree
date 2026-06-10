import { betterAuth } from "better-auth/minimal";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { env } from "$env/dynamic/private";
import { getRequestEvent } from "$app/server";
import { getDb } from "$lib/server/db";
import { admin, anonymous, emailOTP, phoneNumber, username } from "better-auth/plugins";

const authConfig = {
  baseURL: env.ORIGIN,
  secret: env.BETTER_AUTH_SECRET,
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
        input: false, // don't allow user to set role
      },
      lang: { type: "string", required: false, defaultValue: "en" },
    },
  },
  emailAndPassword: { enabled: true },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [
    admin(),
    anonymous(),
    username(),
    phoneNumber({
      sendOTP: ({ phoneNumber, code }, ctx) => {
        // TODO: Implement sending OTP code via SMS
      },
    }),
    emailOTP({
      sendVerificationOTP: async ({ email, otp, type }, ctx) => {
        // TODO: send email OTP to user
      },
    }),
    sveltekitCookies(getRequestEvent), // make sure this is the last plugin in the array
  ],
} satisfies Omit<Parameters<typeof betterAuth>[0], "database">;

export const createAuth = (d1: D1Database, origin?: string) =>
  betterAuth({
    ...authConfig,
    baseURL: origin || authConfig.baseURL,
    database: prismaAdapter(getDb(d1), { provider: "sqlite" }),
  });

/**
 * DO NOT USE!
 *
 * This instance is used by the `better-auth` CLI for schema generation ONLY.
 * To access `auth` at runtime, use `event.locals.auth`.
 */
export const auth = createAuth(null!);
