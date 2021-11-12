const express = require('express');
const router = express.Router();
const {products,add,agregar,edit,update,destroy} = require('../../controllers/admin/productsController');
 
const productImageStore = require('../../middlewares/productImageStore');
const productValidatorEdit = require ('../../validations/productValidatorEdit');
const productValidatorAdd = require ('../../validations/productValidatorAdd');
const adminUserCheck = require('../../middlewares/adminUserCheck');


/* admin/products */
router.get('/',adminUserCheck,products);
router.get('/add', adminUserCheck, add );
router.post('/add',productImageStore.array('image'), productValidatorAdd,agregar);
router.get('/edit/:id',adminUserCheck, edit);
router.put('/edit/:id',productImageStore.array('image'),productValidatorEdit,update);
router.delete('/delete/:id',destroy);

module.exports = router;