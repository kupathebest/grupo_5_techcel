const db = require('../../database/models');

module.exports = {
    colours: (req, res) => {
        db.Colour.findAll()
        .then(colours => {
            res.render('admin/colours', {colours})
        })   
    }

}