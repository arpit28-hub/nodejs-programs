const client = require("../db");

//GET all users
async function getAllUsers() {
  try {
    const res = await client.query("SELECT * FROM users");
    return { success: true, data: res.rows };
  } catch (err) {
    throw err;
  }
}

//GET user by id
async function getUserByID(id) {
  if (!id || isNaN(id)) {
    return { error: "Invalid user Id" };
  }
  try {
    const res = await client.query("SELECT * FROM users WHERE id = $1", [id]);
    if (res.rowCount === 0) {
      return { error: "User Not Found" };
    }
    return { success: true, data: res.rows[0] };
  } catch (err) {
    throw err;
  }
}

//Create a new user
async function createUser(name, email, age) {
  if (!name || !email || !age) {
    return { error: "Missing Required Field" };
  }
  try {
    const res = await client.query(
      "INSERT INTO users(name,email,age) VALUES ($1,$2,$3) RETURNING *",
      [name, email, age]
    );
    return { success: true, data: res.rows[0] };
  } catch (err) {
    throw err;
  }
}

//Update user
async function updateUser(id, name, email, age) {
  try {
    if (!id || isNaN(id)) {
      return { error: "Invalid User Id" };
    }
    const res = await client.query(
      "UPDATE users SET name = $1, email = $2, age = $3 WHERE id=$4 RETURNING * ",
      [name, email, age, id]
    );
    if (res.rowCount === 0) {
      return { error: "User Not Found" };
    }
    return { success: true, data: res.rows[0] };
  } catch (err) {
    throw err;
  }
}

// Delete user
async function deleteUser(id) {
  try {
    if (!id || isNaN(id)) {
      return { Error: "Invalid User Id" };
    }
    const res = await client.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    if (res.rowCount === 0) {
      return { error: "User Not Found" };
    }
    return { success: true, data: res.rows[0] };
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
};
