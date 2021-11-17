var express = require('express');
const {getFilterColour, getAllProducts, getFilterCategory, getFilterBrand } = require('../controllers/apis/productsController');
var router = express.Router();

/* GET apis page. */
router.get('/get-colours-filter', getFilterColour);
router.get('/get-all-products', getAllProducts );
router.get('/get-categories-filter',getFilterCategory);
router.get('/get-brand-filter', getFilterBrand);
var router = express.Router();
const { getMails, verifyPassword } = require('../controllers/apis/usersController')
const { addCategory, addColour } = require('../controllers/apis/adminController')

/* /apis */
router.get('/get-emails', getMails);
router.post('/verify-password',verifyPassword)
router.get('/add-category', addCategory)
router.get('/add-colour', addColour)

module.exports = router;
