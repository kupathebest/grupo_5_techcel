const { check, body } = require('express-validator');
const usuarios = require('../data/usuarios.json');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');

module.exports = [
    check('name')
        .notEmpty().withMessage('*El nombre es obligatorio'),

    check('lastName')
        .notEmpty().withMessage('*El apellido es obligatorio'),

    check('password0')
        .notEmpty().withMessage('*Debes ingresar tu contraseña'),


    body('password0')
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
        
        }),

    body('password1')
        .custom((value, { req }) => {
            if (value != "") {

                if (value.length >= 8) {
                    return true
                } else {
                    return false
                }
            }
            return true
        }).withMessage('*La contraseña debe tener un mínimo de 8 caracteres'),

    body('password2')
        .custom((value, { req }) => {
            if (value !== req.body.password1 && value.length != 0) {
                return false
            }
            return true
        }).withMessage('*La verificación de la contraseña no coincide'),


]