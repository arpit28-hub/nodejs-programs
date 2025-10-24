const client = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
async function loginUser(email, password) {
  if (!email || !password) {
    return { error: "Missing Required Fields" };
  }
  console.log("this is login model");
  const result = await client.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  if (result.rowCount == 0) {
    return { error: "User Not Registered" };
  }

  const user = result.rows[0];
  // compare Hashed password with New password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return { error: "Invalid credentials" };
  }

  // Generate web token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  return { message: "Login successful", token };
}

module.exports = { loginUser };

