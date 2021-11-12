const express = require('express');
const router = express.Router();
const {colours} = require('../../controllers/admin/coloursController');
 
const adminUserCheck = require('../../middlewares/adminUserCheck');


/* admin/colours */
router.get('/',adminUserCheck,colours);

module.exports = router;