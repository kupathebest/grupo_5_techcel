const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
let celulares = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'celulares.json'), 'utf-8'));

module.exports = {
    login: (req, res) => {
        return res.render('users/login')
       

    },
    processLogin : (req,res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            const {email} = req.body;
            let usuario = usuarios.find(usuario => usuario.email === email);
            req.session.userLogin = {
                id : usuario.id,
                nombre : usuario.nombre,
                rol : usuario.rol
            }
            return res.redirect('/')
        }else{
            return res.render('login',{
                title : 'Login',
                productos,
                errores : errors.mapped()
            })
        }
       
    },

    register: (req, res) => {
        return res.render('users/register')
    },
} 