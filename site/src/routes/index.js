var express = require('express');
var router = express.Router();
const {index, envios, contactanos, comoComprar, about, } = require('../controllers/indexController')

/* GET home page. */
router.get('/', index);
router.get('/envios', envios)
router.get('/contactanos', contactanos)
router.get('/comoComprar', comoComprar)
router.get('/about', about)

module.exports = router;
