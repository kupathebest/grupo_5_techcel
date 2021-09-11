var express = require('express');
var router = express.Router();
const { carrito, shop } = require('../controllers/cartController');
const userCheck = require('../middlewares/userCheck');
/* GET cart page. */
router.get('/', userCheck, carrito);
router.get('/shop', userCheck,shop);

module.exports = router;