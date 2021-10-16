const db = require('../database/models');
const {Op} = require('sequelize');
const toThousand = require('../utils/toThousand')

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
    }

}