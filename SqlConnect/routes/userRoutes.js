const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
} = require("../model/userModel");

// GET all users
router.get("/", async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

//GET user by ID
router.get("/:id", async (req, res) => {
  const user = await getUserByID(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User Not found" });
  }
  res.json(user);
});

//POST create user
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  const user = await createUser(name, email, age);
  res.status(201).json(user);
  //   res.json(user);
});

//PUT update user
router.put("/:id", async (req, res) => {
  const { name, email, age } = req.body;
  const user = await updateUser(req.params.id, name, email, age);
  if (!user) {
    return res.status(404).json({ error: "User Not found" });
  }
  res.json(user);
});

router.delete("/:id", async (req, res) => {
  const user = await deleteUser(req.params.id);
  res.json(user);
  if (!user) {
    res.status(404).json({ error: "User Not found" });
  }
  res.json(user);
});

module.exports = router;
