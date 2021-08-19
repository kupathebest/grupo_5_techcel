const fs = require('fs');
const path = require('path');
let celulares = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','celulares.json'),'utf-8'));

module.exports = {
    productos : (req,res) => {
        celulares = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','celulares.json'),'utf-8'));
        return res.render('productos/productos',{
            celulares,
        })
    },
    detail : (req,res) => {
        return res.render('productos/productDetail')
    }

}