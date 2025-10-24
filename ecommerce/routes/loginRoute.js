const express = require("express");
const router = express.Router();
const loginController = require("../controller/loginController");

// Recieves Email and password from the Frontend during Signup
router.post("/", loginController.signIn);

module.exports = router;
