var express = require('express');
var router = express.Router();
const {add,agregar,index,edit,update,destroy} = require('../controllers/adminController');

const multer = require('multer');



const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images/equipos')
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage,
})

const productEditValidator = require ('../validations/productEdit')
/* GET cart page. */
router.get('/',index);
router.get('/add', add );
router.post('/add', agregar);
router.get("/edit/:id",edit);
router.put("/edit/:id",update);
router.delete('/delete/:id',destroy);



module.exports = router;