var express = require('express');
var router = express.Router();
const { login, register, processLogin,processRegister } = require('../controllers/usersController');
const loginValidator = require('../../validations/loginValidator')


/* GET users listing. */
router.get('/login', login);
router.post('/login',loginValidator,processLogin)
router.get('/register', register);
router.post('/register',processRegister);



module.exports = router;
