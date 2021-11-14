const db = require('../../database/models');

module.exports = {
    categories: (req, res) => {
        db.Category.findAll()
        .then(categories => {
            res.render('admin/categories', {categories})
        })   
    },
    add : (req, res) => {
        db.Category.create({
            name: req.body.name
        })
        .then(() => {
            return res.redirect('/admin')
        })
        .catch(error => console.log(error))
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