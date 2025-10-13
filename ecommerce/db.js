require("dotenv").config();
// db.js
const { Client } = require("pg");

// ✅ Create a new PostgreSQL client
const client = new Client({
  user: process.env.DB_USER, // your postgres username
  host: process.env.DB_HOST, // your server host
  database: process.env.DB_NAME, // your database name
  password: process.env.DB_PASSWORD, // your postgres password
  port: process.env.DB_PORT, // default PostgreSQL port
});

// ✅ Connect to the database
client
  .connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ Connection error", err.stack));

module.exports = client;
