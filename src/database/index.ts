import {
  drizzle,
  type BetterSQLite3Database,
} from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import * as schema from "./schema";
import process from "node:process";

process.loadEnvFile();

const sqlite = new Database(process.env.DATABASE_URL!);
export const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, {
  schema,
});

migrate(db, { migrationsFolder: "migrations" });
