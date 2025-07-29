import { createPool, type Pool } from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  client: Pool | undefined;
};

export const client =
  globalForDb.client ??
  createPool({
    host: env.SINGLESTORE_HOST as string,
    port: parseInt(env.SINGLESTORE_PORT as string),
    user: env.SINGLESTORE_USER as string,
    password: env.SINGLESTORE_PASS as string,
    database: env.SINGLESTORE_DB_NAME as string,
    ssl: {},
    maxIdle: 0,
  });
if (env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema, mode: "default" });
