const express = require('express');
const router = express.Router();
const {categories} = require('../../controllers/admin/categoriesController');
 
const adminUserCheck = require('../../middlewares/adminUserCheck');


/* admin/categories */
router.get('/',adminUserCheck,categories);

module.exports = router;