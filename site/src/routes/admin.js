const express = require('express');
const router = express.Router();
const {add,agregar,index,edit,update,destroy,search} = require('../controllers/adminController');
 


const productImageStore = require('../middlewares/productImageStore');
const productValidatorEdit = require ('../validations/productValidatorEdit');
const productValidatorAdd = require ('../validations/productValidatorAdd');
const adminUserCheck = require('../middlewares/adminUserCheck');


/* GET cart page. */
router.get('/',adminUserCheck,index);
router.get('/add', adminUserCheck, add );
router.post('/add',productImageStore.array('image'), productValidatorAdd,agregar);
router.get('/edit/:id',adminUserCheck, edit);
router.put('/edit/:id',productImageStore.array('image'),productValidatorEdit,update);

router.delete('/delete/:id',destroy);

router.get('/search', search)

module.exports = router;