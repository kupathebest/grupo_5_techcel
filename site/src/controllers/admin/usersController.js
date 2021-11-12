const db = require('../../database/models');

module.exports = {
    users: (req, res) => {
        db.User.findAll({
            include : ["avatar","rol"]
        })
        .then(users => {
            res.render('admin/users', {users})
        })
    }

}