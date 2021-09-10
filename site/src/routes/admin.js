const express = require('express');
const router = express.Router();
const {add,agregar,index,edit,update,destroy,search} = require('../controllers/adminController');
 


const productImageStore = require('../middlewares/productImageStore');
const productValidator = require ('../validations/productValidator')
const adminUserCheck = require('../middlewares/adminUserCheck');

/* GET cart page. */
router.get('/',adminUserCheck,index);
router.get('/add', adminUserCheck, add );
router.post('/add',productImageStore.array('image'), productValidator,agregar);
router.get('/edit/:id',adminUserCheck, edit);
router.put('/edit/:id',productImageStore.array('image'),productValidator,update);

router.delete('/delete/:id',destroy);

router.get('/search', search)

module.exports = router;