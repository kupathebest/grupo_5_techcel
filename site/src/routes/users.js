var express = require('express');
var router = express.Router();
const { login, register, processLogin,processRegister,profile, logout,update} = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require("../validations/registerValidator");
const profileValidator = require('../validations/profileValidator');
const avatarImageStore = require("../middlewares/avatarImageStore");
const userCheck = require("../middlewares/userCheck");
const sessionCheck = require("../middlewares/sessionCheck");

/* GET users listing. */
router.get('/login',sessionCheck, login);
router.post('/login',loginValidator,processLogin);
router.get('/register',sessionCheck, register);
router.post('/register',registerValidator,processRegister);
router.get("/profile",userCheck,profile);
router.put('/profile',avatarImageStore.any("avatar"),profileValidator, update);
router.get('/logout',userCheck,logout);



module.exports = router;
