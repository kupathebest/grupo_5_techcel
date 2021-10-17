const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');


let celulares = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'celulares.json'), 'utf-8'));
let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'usuarios.json'), 'utf-8'));



module.exports = {

    login: (req, res) => {
        return res.render('users/login')


    },
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const { email, recordar } = req.body;
            let usuario = usuarios.find(usuario => usuario.email === email);
            req.session.userLogin = {
                id: usuario.id,
                nombre: usuario.nombre,
                rol: usuario.rol,
                avatar: usuario.avatar
            }
            if (req.body.recordar) {
                res.cookie("techcelLogin", req.session.userLogin, { maxAge: 1000 * 60 * 60 * 24 })
            }


            return res.redirect('/')
        } else {
            return res.render('users/login', {
                celulares,
                errores: errors.mapped()

            })
        }

    },
    register: (req, res) => {
        return res.render('users/register')
    },

    processRegister: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const { nombre, apellido, email, password } = req.body

            let usuario = {
                id: usuarios[usuarios.length - 1] ? usuarios[usuarios.length - 1].id + 1 : 1,
                nombre: nombre.trim(),
                apellido: apellido.trim(),
                email: email.trim(),
                password: bcryptjs.hashSync(password.trim(), 10),
                rol: "user",
                avatar: "avatar_default.png"
            }
            usuarios.push(usuario);

            fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios, null, 2), "utf-8");

            req.session.userLogin = {
                id: usuario.id,
                nombre: usuario.nombre,
                avatar: usuario.avatar,
                rol: usuario.rol
            }
            return res.redirect('/')

        } else {
            return res.render("users/register", {
                errores: errors.mapped(),
                usuarios,
                old: req.body
            })
        }


    },

    profile: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            db.User.findByPk(req.session.userLogin.id)
                .then(user => {
                    console.log(user)
                    res.render('users/profile', {
                        usuario: user
                    })
                })

        } else {
            res.redirect('/')
        }
    },

    update: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            const { name, password0, password1, lastName } = req.body;

            db.User.update({
                name: name.trim(),
                lastName: lastName.trim(),
                password: password1 ? bcryptjs.hashSync(password1, 10) : bcryptjs.hashSync(password0, 10)
            },
                {
                    where:{
                        id: req.session.userLogin.id
                    }
                }
            )
                .then(user => {
                    console.log(user)
                    return res.redirect('/')
                })
                .catch(error => console.log(error))
        } else {
            db.User.findByPk(req.session.userLogin.id)
                .then(user => {
                    console.log(user)
                    res.render('users/profile', {
                        usuario: user,
                        errores: errors.mapped
                    })
                })
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie("techcelLogin");
        return res.redirect('/')
    }
}




