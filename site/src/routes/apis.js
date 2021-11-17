var express = require('express');
const {getFilterColour, getAllProducts, getFilterCategory, getFilterBrand } = require('../controllers/apis/productsController');
var router = express.Router();

/* GET apis page. */
router.get('/get-colours-filter', getFilterColour);
router.get('/get-all-products', getAllProducts );
router.get('/get-categories-filter',getFilterCategory);
router.get('/get-brand-filter', getFilterBrand);

module.exports = router;
