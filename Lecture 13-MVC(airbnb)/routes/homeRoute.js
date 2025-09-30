const express = require('express')
const router = express.Router();
// import controller
const gethome = require('../controllers/homeController')
router.get('/',gethome)

module.exports = router;