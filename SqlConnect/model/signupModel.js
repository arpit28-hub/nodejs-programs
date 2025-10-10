const client = require("../db");
const bcrypt = require("bcrypt"); //used to hash the password(one-way)

// save the user signup information
async function signUpUser(email, password) {
  try {
    //STEP-1:- Check if the  User already exist
    const existingUser = await client.query(
      `SELECT * FROM  userauth WHERE email= $1`,
      [email]
    );
    if (existingUser.rows.length > 0) {
      return { error: "user already exists" };
    }

    //STEP-2:- hasing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // STEP-3:- Save to DB
    const result = await client.query(
      "INSERT INTO userauth(email,password) VALUES ($1,$2) RETURNING *",
      [email, hashedPassword]
    );
    return { user: result.rows[0] };
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

module.exports = { signUpUser };
