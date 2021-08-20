const fs = require('fs');
const path = require('path');
let celulares = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'celulares.json'), 'utf-8'));

module.exports = {
    carrito : (req,res) =>{
        return res.render('carrito/productCart');
    },
    shop : (req,res) =>{
        return res.render('carrito/shop');
    }
}