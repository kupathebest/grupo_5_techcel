const express = require('express');
const router = express.Router();
const {index,search} = require('../../controllers/admin/indexController');
 
const adminUserCheck = require('../../middlewares/adminUserCheck');

/* admin */

router.get('/',adminUserCheck,index);
router.get('/search', search)

module.exports = router;