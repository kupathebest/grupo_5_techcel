const db = require('../../database/models');
const { validationResult } = require('express-validator');

module.exports = {
    categories: (req, res) => {
        db.Category.findAll()
        .then(categories => {
            res.render('admin/categories', {categories})
        })   
    },
    update : (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Category.update({
                name: req.body.name
            },
            {
                where : {
                    id : req.params.id
                }
            })
            .then(() => {
                return res.redirect('/admin/categories')
            })
            .catch(error => console.log(error))
        }else{
            db.Category.findAll()
            .then(categories => {
            res.render('admin/categories', {
                categories,
                errores: errors.mapped(),
            })
        })  
        }
    },
    destroy : (req, res) => {
        db.Category.destroy({
            where : {
                id: req.params.id
            }
        })
        .then(() => {
            return res.redirect('/admin/categories')
        })
        .catch(error => console.log(error))
    }
}