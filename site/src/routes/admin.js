var express = require('express');
var router = express.Router();
const {add,agregar,index} = require('../controllers/adminController');

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
/* GET cart page. */
router.get('/',index);
router.get('/add', add );
router.post('/add', agregar);

module.exports = router;