//core module
const path = require('path')

//External Module
const express = require('express');
const router = express.Router()

//Local Module
const rootdir=require('../utils/pathUtil')

router.get("/", (req, res) => {

  res.sendFile(path.join(rootdir,'views','home.html'));
});

module.exports = router;
