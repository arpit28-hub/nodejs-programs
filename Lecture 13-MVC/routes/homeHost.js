const express = require('express'); 
const path = require('path')
const homeController= require('../controller/home.js')
const router = express.Router();
router.get('/',homeController.getHomes);

module.exports=router;
