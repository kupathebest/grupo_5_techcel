const toThousand = require('../../utils/toThousand');
const db = require('../../database/models');
const { Op } = require('sequelize');

module.exports = {
    index: (req, res) => {
        res.render('admin/index')
    },
    search: (req, res) => {
        let busqueda = req.query.keywords.toLowerCase()
        db.Product.findAll({
            include: ['category', 'images', 'colour', 'mainFeature', 'display', 'camera', 'net', 'connectivity', 'battery'],
            where: {
                [Op.or]: [
                    {
                        shortName: {
                            [Op.substring]: busqueda
                        }
                    },
                    {
                        longName: {
                            [Op.substring]: busqueda
                        }
                    }
                ]
            }
        })
            .then(celulares => {
                return res.render('admin/resultsAdmin', {
                    celulares,
                    busqueda,
                    toThousand
                })
            })
            .catch(error => console.log(error))

    }

}