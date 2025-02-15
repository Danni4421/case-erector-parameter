import { sqliteTable } from "drizzle-orm/sqlite-core";

export const timer = sqliteTable("timer", (t) => ({
  id: t.text("timer_id").primaryKey(),
  description: t.text("description").notNull(),
  before: t.integer("before_parameter"),
  after: t.integer("after_parameter"),
  combined: t.integer("combined_parameter"),
  created_at: t.integer("created_at", { mode: "timestamp" }).notNull(),
  updated_at: t.integer("updated_at", { mode: "timestamp" }),
}));
