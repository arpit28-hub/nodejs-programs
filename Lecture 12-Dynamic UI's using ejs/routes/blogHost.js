const express = require('express');
const path = require('path');
const router = express.Router();
const blogController = require('../controller/blog.js')
router.get('/post/:id',blogController.showPost);

module.exports=router;