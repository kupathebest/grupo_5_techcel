const fs = require('fs');
const path = require('path');
let celulares = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','celulares.json'),'utf-8'));
const toThousand = require('../utils/toThousand')

module.exports = {
    index : (req,res) => {
        celulares = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','celulares.json'),'utf-8'));
        return res.render('index',{
            celulares,
            toThousand
        })
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
        let result = celulares.filter(celular => celular.nombreLargo.toLowerCase().includes(busqueda.trim()) || celular.marca.toLowerCase().includes(busqueda.trim()))
        return res.render('results',{
            celulares : result,
            busqueda,
            toThousand,
        })
    }

}