const express = require('express');
const router = express.Router();
const roleController = require('../controller/role')
router.get('/role',roleController.getrole)
module.exports = router;