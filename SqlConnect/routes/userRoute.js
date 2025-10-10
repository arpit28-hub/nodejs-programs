const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// GET all users
router.get("/", userController.getAll);

//GET user by ID
router.get("/:id", userController.getUser);

//POST create user
router.post("/", userController.addUser);

//PUT Update user
router.put("/:id", userController.changeUser);

//Delete User
router.delete("/:id", userController.removeUser);

module.exports = router;
