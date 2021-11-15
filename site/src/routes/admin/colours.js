const express = require('express');
const router = express.Router();
const {colours, update, destroy} = require('../../controllers/admin/coloursController');
 
const adminUserCheck = require('../../middlewares/adminUserCheck');
const nameTableValidator = require('../../validations/nameTableValidator');


/* admin/colours */
router.get('/',adminUserCheck,colours);
router.put('/update/:id',nameTableValidator, update)
router.delete('/delete/:id',destroy);

module.exports = router;