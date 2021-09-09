const express = require('express');
const router = express.Router();
const {add,agregar,index,edit,update,destroy,search} = require('../controllers/adminController');
 


const productImageStore = require('../middlewares/productImageStore');
const productValidatorAdd = require ('../validations/productValidatorAdd');
const productValidatorEdit = require ('../validations/productValidatorEdit');


/* GET cart page. */
router.get('/',index);
router.get('/add', add );
router.post('/add',productImageStore.array('image'), productValidatorAdd,agregar);
router.get('/edit/:id',edit);
router.put('/edit/:id',productImageStore.array('image'),productValidatorEdit,update);

router.delete('/delete/:id',destroy);

router.get('/search', search)

module.exports = router;