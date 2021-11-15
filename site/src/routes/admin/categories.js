const express = require('express');
const router = express.Router();
const {categories, destroy, update} = require('../../controllers/admin/categoriesController');
 
const adminUserCheck = require('../../middlewares/adminUserCheck');
const nameTableValidator = require('../../validations/nameTableValidator');


/* admin/categories */
router.get('/',adminUserCheck,categories);
router.put('/update/:id',nameTableValidator, update)
router.delete('/delete/:id',destroy);

module.exports = router;