const db = require('../../database/models');

module.exports = {
    addCategory : async (req, res) => {
        const category = await db.Category.create(
            {
                name: req.query.name
            }
        )
        let response = {
            status: 201,
            meta: {
                link: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
                msg: 'la categoria se ha guardado con éxito'
            },
            data: category
        }
        return res.status(201).json(response)   
    }
}