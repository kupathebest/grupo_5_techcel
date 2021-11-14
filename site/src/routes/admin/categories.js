const express = require('express');
const router = express.Router();
const {categories, add, destroy} = require('../../controllers/admin/categoriesController');
 
const adminUserCheck = require('../../middlewares/adminUserCheck');


/* admin/categories */
router.get('/',adminUserCheck,categories);
router.post('/add', add)
router.delete('/delete/:id',destroy);

module.exports = router;