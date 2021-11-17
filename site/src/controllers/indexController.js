const db = require('../database/models');
const {Op} = require('sequelize');
const toThousand = require('../utils/toThousand')
const { validationResult } = require('express-validator');
const sendMail = require('../utils/enviarMail')

module.exports = {
    index : (req,res) => {
        let novedades = db.Category.findOne({
            where : {
                name : 'novedades'
            },
            include : [
                {
                    association : 'product',
                    include : [
                       {association : 'category'},
                       {association : 'images'}
                    ]
                }
            ]
        })
        let losMasComprados = db.Category.findOne({
            where : {
                name : 'los mas comprados'
            },
            include : [
                {
                    association : 'product',
                    include : [
                       {association : 'category'},
                       {association : 'images'}
                    ]
                }
            ]
        })
        let ofertas = db.Category.findOne({
            where : {
                name : 'ofertas'
            },
            include : [
                {
                    association : 'product',
                    include : [
                       {association : 'category'},
                       {association : 'images'}
                    ]
                }
            ]
        })
        Promise.all([novedades,losMasComprados,ofertas])
    
            .then(([novedades,losMasComprados,ofertas]) => {
                return res.render('index',{
                    novedades: novedades.product,
                    losMasComprados : losMasComprados.product,
                    ofertas : ofertas.product,
                    toThousand
                })
            })
            .catch(error => console.log(error))
    },
    envios : (req, res) => {
        return res.render('envios')
    },
    contactanos : (req, res) => {
        return res.render('contactanos')
    },
    comoComprar : (req, res) => {
        return res.render('comoComprar')
    },
    about : (req,res) => {
        return res.render('about')
    },
    search : (req, res) => {
        let busqueda = req.query.keywords.toLowerCase()
        db.Product.findAll({
            include : ['images'],
            where : {
                [Op.or] : [
                    {
                        shortName : {
                            [Op.substring] : busqueda
                        }
                    },
                    {
                        longName : {
                            [Op.substring] : busqueda
                        }
                    }
                ]
            }
        })
            .then(celulares => {
                return res.render('results',{
                    celulares,
                    busqueda,
                    toThousand
                })
            })
            .catch(error => console.log(error)) 
    },
    sendEmail: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            const { name, phone, email, message } = req.body

            const contentHtml = `<h2>Formulario de contacto de:</h2>
            <ul>
            <li>Nombre: ${name}</li>
            <li>Telefono: ${phone}</li>
            <li>Email de contacto: ${email}</li>
            </ul>
            <p>${message}</p>`
    
            let from = "techcel";
            let destiny = "contacto.techcel@gmail.com";
            let subject = "formulario de contacto";
    
            sendMail(from, destiny, subject, contentHtml)
                .then(result => res.redirect("/"))
                .catch(error => console.log(error))
        }else {
            return res.render('contactanos', {
                errores: errors.mapped(),
                old: req.body
            })
        }

        
    }

}