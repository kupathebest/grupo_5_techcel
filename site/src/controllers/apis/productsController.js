const db = require('../../database/models');
const { Op } = require('sequelize');
const throwError = (res, error) => {
    return res.status(error.status || 500).json({
        status: error.status || 500,
        errors: error.errors
    })
}
const getUrl = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`

module.exports = {
    getProductsFilter : async (req,res) => {
        try {
            
            let result = await db.Product.findAll({
                attributes : [

                    "id","shortName", "brand", "price"

                ],

                include:["category", "colour","images"]

            })

            let products = result
            return res.status(200).json({
                meta: {
                    link: getUrl(req),
                    total: products.length
                },
                data: products
            })

        } catch (error) {
            console.log(error)
            throwError(res, error)

        }
    }
}