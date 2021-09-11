var express = require('express');
var router = express.Router();
const { login, register, processLogin,processRegister,profile, logout,update} = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require("../validations/registerValidator");
const profileValidator = require('../validations/profileValidator');
const avatarImageStore = require("../middlewares/avatarImageStore")

/* GET users listing. */
router.get('/login', login);
router.post('/login',loginValidator,processLogin);
router.get('/register', register);
router.post('/register',registerValidator,processRegister);
router.get("/profile",profile);
router.put('/profile',avatarImageStore.single("avatar"),profileValidator, update);
router.get('/logout',logout);



module.exports = router;
