import { sqliteTable } from "drizzle-orm/sqlite-core";

export const mechanic = sqliteTable("mechanic", (t) => ({
  id: t.text("mechanic_id").primaryKey(),
  description: t.text("description").notNull(),
  before: t.integer("before_parameter", { mode: "timestamp" }),
  after: t.integer("after_parameter", { mode: "timestamp" }),
  combined: t.integer("combined_parameter", { mode: "timestamp" }),
  mechanic_picture: t.text("mechanic_picture").notNull(),
  created_at: t.integer("created_at", { mode: "timestamp" }).notNull(),
  updated_at: t.integer("updated_at", { mode: "timestamp" }),
}));
