const {check, body} = require('express-validator');
const bcryptjs = require('bcryptjs');

module.exports=[ 
    check("nombre")
    .notEmpty()
    .withMessage("*Debes ingresar un nombre"),

    check("apellido")
     .notEmpty()
    .withMessage("*Debes ingresar un apellido"),

    check('email')
    .isEmail()
    .withMessage('*Debes ingresar un email válido'),

     check('password')
    .isLength({
     min:8, 
    })
    .withMessage('*Tu contraseña debe tener un minimo de 8 caracteres'),

    body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('La verificación de la contraseña no coincide'),

    check('terms')
    .isString('on').withMessage('Debes aceptar los términos y condiciones')
        
]