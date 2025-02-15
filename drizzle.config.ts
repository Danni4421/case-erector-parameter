import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/database/schema/**/*.ts",
  out: "./migrations",

  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
