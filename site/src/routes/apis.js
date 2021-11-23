var express = require('express');
var router = express.Router();
const { getMails, verifyPassword } = require('../controllers/apis/usersController')
const { addCategory, addColour } = require('../controllers/apis/adminController')
const { getProducts, addImage, deleteImage } = require('../controllers/apis/productsController');
const imageStore = require('../middlewares/productImageStore')



/* /apis */
router.get('/get-products', getProducts)
router.get('/get-emails', getMails);
router.post('/verify-password',verifyPassword)
router.get('/add-category', addCategory)
router.get('/add-colour', addColour)
router.get('/delete-image/:id',deleteImage)
router.post('/add-image/:id',imageStore.any(),addImage)

module.exports = router;
