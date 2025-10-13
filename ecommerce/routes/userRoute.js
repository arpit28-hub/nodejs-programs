const express = require("express");
const router = express.Router();
const { getall } = require("../controller/userController");

router.get("/", getall);
module.exports = router;
