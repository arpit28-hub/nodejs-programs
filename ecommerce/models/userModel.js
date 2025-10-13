const client = require("../db");
// fetch all users from the database
const fetchAllUsers = async () => {
  const result = await client.query("SELECT * FROM users");
  if (!result.rows === 0) {
    return { error: "No users found" };
  }
  return result.rows;
};

module.exports = { fetchAllUsers };
