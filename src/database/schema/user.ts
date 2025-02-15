import { sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", (t) => ({
  id: t.text("user_id").primaryKey(),
  username: t.text("username").notNull(),
  email: t.text("email").notNull(),
  password: t.text("password").notNull(),
  created_at: t.integer("created_at", { mode: "timestamp" }).notNull(),
  updated_at: t.integer("updated_at", { mode: "timestamp" }),
}));
