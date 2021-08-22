const fs = require('fs');
const path = require('path');
let celulares = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','celulares.json'),'utf-8'));
const toThousand = require('../utils/toThousand')

module.exports = {
    productos : (req,res) => {
        celulares = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','celulares.json'),'utf-8'));
        return res.render('productos/productos',{
            celulares,
            toThousand
        })
    },
    detail : (req,res) => {
        let celular = celulares.find(celular => celular.id === +req.params.id)
        return res.render('productos/productDetail', {
            celular,
            celulares,
            toThousand
        })
    }

}