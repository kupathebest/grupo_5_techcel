const { check } = require('express-validator');
let regExLetter = /^[A-Z ]+$/i;

module.exports = [
    check('name')
    .notEmpty().withMessage('*El nombre es obligatorio').bail()
    .isLength({
        min : 2
    }).withMessage('El nombre debe tener como mínimo 2 caracteres').bail()
    .matches(regExLetter).withMessage('*El nombre solo debe contener letras'),

    check('phone')
    .notEmpty().withMessage('*El telefono es obligatorio'),
    
    check('email')
    .isEmail().withMessage('*Debes ingresar un email válido'),

    check('message')
    .notEmpty().withMessage('*El mensaje es obligatorio').bail()
    .isLength({
        min : 10
    }).withMessage('*El mensaje debe tener como mínimo 10 caracteres'),

]
