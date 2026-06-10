import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "$lib/generated/prisma";

export const getDb = (d1: D1Database): PrismaClient => {
  const adapter = new PrismaD1(d1);
  return new PrismaClient({ adapter });
};
export type DbClient = PrismaClient;
export type DbTransaction = Omit<
  PrismaClient,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>;
