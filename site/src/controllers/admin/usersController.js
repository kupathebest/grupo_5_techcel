const db = require('../../database/models');

module.exports = {
    users: (req, res) => {
        let usuarios = db.User.findAll({
            include : ["avatar","rol"]
        })
        let roles = db.Rol.findAll()
        Promise.all([usuarios,roles])
        .then(([usuarios,roles]) => {
            return res.render('admin/users',{
                users: usuarios,
                rols : roles,
            })
        })
        .catch(error => console.log(error))
    },
    destroy : (req, res) => {
        db.User.destroy({
            where : {
                id: req.params.id
            }
        })
        .then(() => {
            console.log(req.session.userLogin.id)
            if(req.session.userLogin.id === +req.params.id) {
                req.session.destroy();
                res.clearCookie("techcelLogin");
            }
            return res.redirect('/admin/users')
        })
        .catch(error => console.log(error))
    },
    update : (req, res) => {
            
            db.User.update({
                rolId: req.body.rols
            },
            {
                where : {
                    id : req.params.id
                }
            })
            .then(() => {
                return res.redirect('/admin/users')
            })
            .catch(error => console.log(error))
        
    },

}