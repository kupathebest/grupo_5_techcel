const db = require('../../database/models');

module.exports = {
    categories: (req, res) => {
        db.Category.findAll()
        .then(categories => {
            res.render('admin/categories', {categories})
        })   
    }
}