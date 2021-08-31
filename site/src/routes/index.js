var express = require('express');
var router = express.Router();
const {index, envios, contactanos, comoComprar, about, search} = require('../controllers/indexController')

/* GET home page. */
router.get('/', index);
router.get('/envios', envios)
router.get('/contactanos', contactanos)
router.get('/comoComprar', comoComprar)
router.get('/about', about)
router.get('/search', search)

module.exports = router;
