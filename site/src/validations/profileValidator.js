const { check, body } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
let regExPass = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
let regExLetter = /^[A-Z ]+$/i;

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isLength({
        min : 2
    }).withMessage('El nombre debe tener como mínimo 2 caracteres').bail()
    .matches(regExLetter).withMessage('El nombre solo debe contener letras'),

    check('lastName')
        .notEmpty().withMessage('El apellido es obligatorio').bail()
        .isLength({
            min : 2
        }).withMessage('El apellido debe tener como mínimo 2 caracteres').bail()
        .isAlpha().withMessage('El apellido solo debe contener letras'),

    check('password')
        .notEmpty().withMessage('*Debes ingresar tu contraseña').bail(),

    body('password')
        .custom((value, { req }) => {
            return db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(usuario => {
                    if(!usuario || !bcryptjs.compareSync(value, usuario.password)){
                        return Promise.reject()
                    }
                }).catch( () => Promise.reject('Credenciales inválidas'))
        
        })
]

