const express = require("express");
const router = express.Router();

// Import all route files
const userRoute = require("./userRoute");
const signupRoute = require("./signupRoute");
const loginRoute = require("./loginRoute")

// Use them
router.use("/users", userRoute);
router.use("/signup", signupRoute);
router.use("/login",loginRoute)

module.exports = router;
