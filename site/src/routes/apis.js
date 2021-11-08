var express = require('express');
const {getProductsFilter } = require('../controllers/apis/productsController');
var router = express.Router();

/* GET apis page. */
router.get('/get-products-filter', getProductsFilter);

module.exports = router;
