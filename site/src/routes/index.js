var express = require('express');
var router = express.Router();
const {index, envios, contactanos, comoComprar, about, search, sendEmail} = require('../controllers/indexController')
const contactValidator = require("../validations/contactValidator");

/* GET home page. */
router.get('/', index);
router.get('/envios', envios)
router.get('/contactanos', contactanos)
router.post('/contactanos',contactValidator, sendEmail)
router.get('/comoComprar', comoComprar)
router.get('/about', about)
router.get('/search', search)

module.exports = router;
