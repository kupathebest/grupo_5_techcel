const db = require('../../database/models');
const { validationResult } = require('express-validator');

module.exports = {
    colours: (req, res) => {
        db.Colour.findAll()
        .then(colours => {
            res.render('admin/colours', {colours})
        })   
    },
    update : (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Colour.update({
                name: req.body.name
            },
            {
                where : {
                    id : req.params.id
                }
            })
            .then(() => {
                return res.redirect('/admin/colours')
            })
            .catch(error => console.log(error))
        }else{
            db.Colour.findAll()
            .then(colours => {
            res.render('admin/colours', {
                colours,
                errores: errors.mapped(),
            })
        })  
        }
    },
    destroy : (req, res) => {
        db.Colour.destroy({
            where : {
                id: req.params.id
            }
        })
        .then(() => {
            return res.redirect('/admin/colours')
        })
        .catch(error => console.log(error))
    }

}