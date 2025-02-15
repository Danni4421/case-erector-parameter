import { sqliteTable } from "drizzle-orm/sqlite-core";

export const transfer = sqliteTable("transfer", (t) => ({
  id: t.text("transfer_id").primaryKey(),
  description: t.text("description").notNull(),
  before_active: t.integer("before_active"),
  after_active: t.integer("after_active"),
  combined_active: t.integer("combined_active"),
  before_inactive: t.integer("before_inactive"),
  after_inactive: t.integer("after_inactive"),
  combined_inactive: t.integer("combined_inactive"),
  created_at: t.integer("created_at", { mode: "timestamp" }).notNull(),
  updated_at: t.integer("updated_at", { mode: "timestamp" }),
}));
