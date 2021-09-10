const {check, body} = require('express-validator');
const users = require('../data/usuarios.json');
const bcrypt = require('bcryptjs'); 

module.exports = [
    check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio'),

    body('password0')
    .custom((value,{req}) => {
        if(value != ""){
            let user = users.find(user => user.email === req.body.email && bcrypt.compareSync(value, user.pass))
            if(user){
                return true
            }else{
                return false
            }
        }
        return true
    }).withMessage('Contraseña incorrecta'),

    check('password1')
    .custom((value,{req}) => {
        if(value != ""){
            
            if(value.length >= 6 && value.length <= 12){
                return true
            }else{
                return false
            }
        }
        return true
    }).withMessage('La contraseña debe tener un mínimo de 6 y un máximo de 12 caracteres'),

    body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.pass && value.length != 0){
            return false
        }
        return true
    }).withMessage('La verificación de la contraseña no coincide'),


]