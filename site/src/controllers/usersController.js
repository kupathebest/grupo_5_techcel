const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');




module.exports = {

    login: (req, res) => {
        return res.render('users/login')

    },
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const { email, recordar } = req.body;

            db.User.findOne({
                include: ['avatar'],
                where: {
                    email
                }
            }
            )
                .then(user => {

                    req.session.userLogin = {
                        id: user.id,
                        name: user.name,
                        lastName: user.lastName,
                        avatarId: user.avatarId,
                        avatar: user.avatar.file,
                        rolId: user.rolId
                    }
                    if (recordar) {
                        res.cookie("techcelLogin", req.session.userLogin, { maxAge: 1000 * 60 * 60 * 24 })
                    }
                    return res.redirect('/')

                })
                .catch(error => console.log(error))


        } else {
            return res.render('users/login', {
                errores: errors.mapped()

            })
        }
    },
    register: (req, res) => {
        return res.render('users/register')

    },

    processRegister: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            const { name, lastName, email, password } = req.body
            db.User.create({
                name: name.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                password: bcryptjs.hashSync(password.trim(), 10),
                rolId: 2,
                avatarId: 1
            })
                .then(user => {
                    db.User.findOne({
                        include: ["avatar"],
                        where: {
                            email
                        }
                    })
                        .then(usuario => {

                            req.session.userLogin = {
                                id: usuario.id,
                                name: usuario.name,
                                lastName: usuario.lastName,
                                avatarId: usuario.avatarId,
                                avatar: usuario.avatar.file,
                                rolId: usuario.rolId,
                            }
                            return res.redirect('/')
                        })
                })
                .catch(error => console.log(error))
        } else {
            return res.render('users/register', {
                errores: errors.mapped(),
                old: req.body
            })
        }

    },

    profile: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            db.User.findByPk(req.session.userLogin.id, {
                include: ['avatar']
            })

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
            if (req.file){
                 db.Avatar.update({
                    file: req.file.filename
                },
                    {
                        where: {
                            id: req.session.userLogin.avatarId
                        }
                    })
                    .then(() => console.log('Imagen actualizada con exito'))
            }
               

            db.User.update({
                name: name.trim(),
                lastName: lastName.trim(),
                password: password1 ? bcryptjs.hashSync(password1, 10) : bcryptjs.hashSync(password0, 10)
            },
                {
                    where: {
                        id: req.session.userLogin.id
                    }
                }
            )
                .then(user => {

                    db.User.findByPk(req.session.userLogin.id, {
                        include: ['avatar']
                    })
                        .then(usuario => {

                            req.session.userLogin2 = {
                                id: usuario.id,
                                name: usuario.name,
                                lastName: usuario.lastName,
                                avatarId: usuario.avatarId,
                                avatar: usuario.avatar.file,
                                rolId: usuario.rolId,
                            }
                            return res.redirect('/')
                        })

                })
                .catch(error => console.log(error))
        } else {
            db.User.findByPk(req.session.userLogin.id, {
                include: ['avatar']
            })
                .then(user => {
                    console.log(user)
                    res.render('users/profile', {
                        usuario: user,
                        errores: errors.mapped()
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




