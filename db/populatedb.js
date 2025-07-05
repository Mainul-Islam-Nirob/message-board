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

const sampleMessages = [
  { user: "Alice", text: "Hello, world!" },
  { user: "Bob", text: "First post on the board!" },
  { user: "Charlie", text: "Wishing everyone a great day!" },
  { user: "Diana", text: "Don’t forget to smile 😊" },
  { user: "Eve", text: "Love this message board!" },
  { user: "Frank", text: "How's everyone doing?" },
];

async function init() {
  try {
    await pool.query(createTableQuery);
    console.log("✅ Table created or already exists.");

    for (const message of sampleMessages) {
      await pool.query(
        "INSERT INTO messages (user_name, text) VALUES ($1, $2)",
        [message.user, message.text]
      );
      console.log(`✅ Inserted message from ${message.user}`);
    }

    console.log("🎉 All messages inserted successfully.");
    process.exit();
  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
}

init();
