const { Pool } = require("pg");
const connectionString = process.argv[2]; 

if (!connectionString) {
  console.error("❌ Please provide a database connection string as an argument.");
  console.log("Usage: node db/populatedb.js <db-url>");
  process.exit(1);
}

const pool = new Pool({ connectionString });

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL,
    text TEXT NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

async function init() {
  try {
    await pool.query(createTableQuery);
    console.log("✅ Table created or already exists.");
    process.exit();
  } catch (err) {
    console.error("❌ Error creating table:", err);
    process.exit(1);
  }
}

init();
