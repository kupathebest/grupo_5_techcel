const {check} = require('express-validator');
const bcryptjs = require('bcryptjs');

module.exports=[ 
    check("nombre")
    .notEmpty()
    .withMessage("debes ingresar un nombre"),

    check("apellido")
     .notEmpty()
    .withMessage("debes ingresar un apellido"),

    check('email')
    .isEmail()
    .withMessage('el email no es válido'),

    check('email')
    .notEmpty()
    .withMessage('Debes ingresar un email válido'),

     check('password')
    .isLength({
     min:8, 
    })
    .withMessage('Minimo de 8 caracteres'),

    check("password")
    .notEmpty()
    .withMessage("debe ingresar una contraseña")
    
]