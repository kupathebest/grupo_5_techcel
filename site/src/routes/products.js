var express = require('express');
var router = express.Router();
const {productos, detail} = require('../controllers/productsController')

/* GET products page. */
router.get('/', productos);
router.get('/detail/:id', detail);


module.exports = router;
