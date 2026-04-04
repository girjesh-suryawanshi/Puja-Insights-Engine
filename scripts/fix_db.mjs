import pg from "pg";
const { Client } = pg;

const DATABASE_URL = "postgresql://postgres:deergh@localhost:5432/puja_insights?schema=public";

async function fix() {
  const client = new Client({
    connectionString: DATABASE_URL,
  });

  try {
    await client.connect();
    console.log("Connected to database.");
    
    // Check if tags column exists
    const res = await client.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name='blogs' AND column_name='tags';
    `);

    if (res.rowCount === 0) {
      console.log("Adding 'tags' column to 'blogs' table...");
      await client.query("ALTER TABLE blogs ADD COLUMN tags TEXT;");
      console.log("Column 'tags' added successfully.");
    } else {
      console.log("Column 'tags' already exists.");
    }

  } catch (err) {
    console.error("Error fixing database:", err);
  } finally {
    await client.end();
  }
}

fix();
