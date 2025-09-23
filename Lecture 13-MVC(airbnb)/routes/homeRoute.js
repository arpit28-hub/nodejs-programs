// core modules
const express = require('express');
const router = express.Router();
const homeController = require('../controller/home')

// external modules
const rootdir =require('../utils/pathUtils')
router.get('/',homeController.gethome)

module.exports=router;