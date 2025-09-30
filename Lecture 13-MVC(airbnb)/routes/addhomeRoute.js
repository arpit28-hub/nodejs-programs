const express = require('express');
const router = express.Router();
// import from controller
const {gethomedata ,posthomedata} = require('../controllers/gethomeController')
router.get('/',gethomedata);
router.post('/',posthomedata);

module.exports=router;