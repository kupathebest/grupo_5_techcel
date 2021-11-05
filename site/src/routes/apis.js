var express = require('express');
var router = express.Router();
const { getMails, verifyPassword } = require('../controllers/apis/usersController')

/* GET apis page. */
router.get('/get-emails', getMails);
router.post('/verify-password',verifyPassword)

module.exports = router;
