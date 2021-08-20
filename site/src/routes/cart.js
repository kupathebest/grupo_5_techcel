var express = require('express');
var router = express.Router();
const { carrito, shop } = require('../controllers/cartController');

/* GET cart page. */
router.get('/', carrito);
router.get('/shop',shop);

module.exports = router;