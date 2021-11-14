var express = require('express');
var router = express.Router();
const { getMails, verifyPassword } = require('../controllers/apis/usersController')
const { addCategory } = require('../controllers/apis/categoriesController')
/* GET apis page. */
router.get('/get-emails', getMails);
router.post('/verify-password',verifyPassword)
router.get('/add-category', addCategory)

module.exports = router;
