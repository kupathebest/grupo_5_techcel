const db = require('../database/models');
const toThousand = require('../utils/toThousand')

module.exports = {
    productos : (req,res) => {
        let categories = db.Category.findAll()
        let colours = db.Colour.findAll()
        
        Promise.all(([categories, colours]))
                .then(([categories, colours]) => {
                return res.render('productos/productos',{
                    categories,
                    colours,
                    toThousand
                })
            })
            .catch(error => console.log(error))
    },
 
    detail : (req,res) => {
        db.Product.findByPk(req.params.id, {
            include : ["category","images", "colour" , "mainFeature", "display","camera","net","connectivity", "battery"]
        })
            .then(celular => {
                db.Product.findAll({
                    include: ["images"]
                })
                .then(celulares=>{
                    return res.render('productos/productDetail',{
                    celular,
                    toThousand,
                    celulares
                 })
                })
            })
            .catch(error => console.log(error))
    }
}