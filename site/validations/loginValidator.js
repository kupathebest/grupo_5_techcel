const {body} = require('express-validator');
const bcryptjs = require('bcryptjs');


module.exports = [
    body('email')
    .custom((value,{req}) => {
        let usuario = usuarios.find(usuario => usuario.email === value && bcryptjs.compareSync(req.body.password,usuario.password));

        if(usuario){
            return true
        }else{
            return false
        }
    }).withMessage('Credenciales inválidas')
    /*body('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('password')
    .isLength({
        min:8, max:12
    })
    .withMessage('Minimo de 8 caracteres y un maximo de 12'),*/

]