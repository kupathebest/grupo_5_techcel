const fs = require('fs');
const path = require('path');
let celulares = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','celulares.json'),'utf-8'));

module.exports = {
    index : (req,res) => {
        celulares = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','celulares.json'),'utf-8'));
        return res.render('index',{
            celulares,
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
    }

}