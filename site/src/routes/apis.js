var express = require('express');
var router = express.Router();
const { getMails, verifyPassword } = require('../controllers/apis/usersController')
const { addCategory, addColour } = require('../controllers/apis/adminController')
const { getProducts } = require('../controllers/apis/productsController');


/* /apis */
router.get('/get-products', getProducts)
router.get('/get-emails', getMails);
router.post('/verify-password',verifyPassword)
router.get('/add-category', addCategory)
router.get('/add-colour', addColour)

module.exports = router;
