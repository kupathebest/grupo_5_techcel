const {check, body} = require('express-validator');
const usuarios = require('../data/usuarios.json');
const bcryptjs = require('bcryptjs'); 

module.exports = [
    check('nombre')
    .notEmpty().withMessage('*El nombre es obligatorio'),

    check('apellido')
    .notEmpty().withMessage('*El apellido es obligatorio'),

    check('password0')
    .notEmpty().withMessage('*Debes ingresar tu contraseña'),

    body('password0')
    .custom((value,{req}) => {
        if(value != ""){
            let usuario = usuarios.find(usuario => usuario.email === req.body.email && bcryptjs.compareSync(value, usuario.password))
            if(usuario){
                return true
            }else{
                return false
            }
        }
        return true
    }).withMessage('*Contraseña incorrecta'),

    body('password1')
    .custom((value,{req}) => {
        if(value != ""){
            
            if(value.length >= 8 ){
                return true
            }else{
                return false
            }
        }
        return true
    }).withMessage('*La contraseña debe tener un mínimo de 8 caracteres'),

    body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password1 && value.length != 0){
            return false
        }
        return true
    }).withMessage('*La verificación de la contraseña no coincide'),


]