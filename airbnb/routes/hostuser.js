const path=require('path')
const express = require("express");
const router = express.Router();
const rootdir = require('../utils/pathUtil');

router.get("/add-user", (req, res) => {
  res.sendFile(path.join(rootdir, "views", "addUser.html"));
});

router.post("/add-user", (req, res) => {
  res.sendFile(path.join(rootdir, "views", "showUser.html"));
});

module.exports = router;
