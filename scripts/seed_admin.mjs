import pg from "pg";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env") });

const { Client } = pg;
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres:deergh@localhost:5432/puja_insights?schema=public";

async function seedAdmin() {
  const client = new Client({ connectionString: DATABASE_URL });

  try {
    await client.connect();
    console.log("Connected to PostgreSQL database.");

    // Create users table if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL DEFAULT 'user',
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `);

    const usersToSeed = [
      { email: "deergh@gmail.com", password: "pass@123", role: "admin" },
      { email: "admin@radheradhepuja.com", password: "admin123", role: "admin" }
    ];

    for (const u of usersToSeed) {
      const hash = await bcrypt.hash(u.password, 10);
      await client.query(
        `INSERT INTO users (email, password_hash, role)
         VALUES ($1, $2, $3)
         ON CONFLICT (email) 
         DO UPDATE SET password_hash = $2, role = $3;`,
        [u.email, hash, u.role]
      );
      console.log(`✅ Admin user seeded: ${u.email} / ${u.password}`);
    }

  } catch (err) {
    console.error("Error seeding admin users:", err);
  } finally {
    await client.end();
  }
}

seedAdmin();
