import { db } from "@/database";
import { user } from "@/database/schema/user";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

async function seed() {
  console.log("🌱 Seeding user...");

  const isAlreadySeeding =
    (await db.select().from(user).where(eq(user.email, "test@example.com")))
      .length !== 0;

  if (!isAlreadySeeding) {
    await db.insert(user).values({
      id: nanoid(16),
      username: "test",
      email: "test@example.com",
      password: bcrypt.hashSync("password", 10),
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
}

seed()
  .then(() => {
    console.log("🌱 Seeding complete!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("🌱 Seeding failed!");
    console.error(error);
    process.exit(1);
  });
