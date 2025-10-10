const express = require("express");
const router = express.Router();
const signupController = require("../controller/signupController");

// Recieves Email and password from the Frontend during Signup
router.post("/", signupController.regUser);

module.exports = router;
