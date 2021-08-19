var express = require('express');
var router = express.Router();
const {index, envios, contactanos, comoComprar, } = require('../controllers/indexController')

/* GET home page. */
router.get('/', index);
router.get('/envios', envios)
router.get('/contactanos', contactanos)
router.get('/comoComprar', comoComprar)

module.exports = router;
