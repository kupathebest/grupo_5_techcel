const db = require('../../database/models');
const { Op } = require('sequelize');
const bcryptjs = require('bcryptjs')

const throwError = (res, error) => {
    return res.status(error.status || 500).json({
        status: error.status || 500,
        errors: error.errors
    })
}
const getUrl = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`

module.exports = {
    getMails: async (req, res) => {
        try {
            let result = await db.User.findAll({
                attributes: ['email']
            })
            let emails = result.map(user => user.email)
            return res.status(200).json({
                meta: {
                    link: getUrl(req),
                    total: emails.length
                },
                data: emails
            })
        } catch (error) {
            console.log(error)
            throwError(res, error)
    
        }
    },
    verifyPassword: async (req, res) => {
        try {
            let user = await db.User.findOne({
                where: { email: req.body.email }
            })

            if(user){
                if (bcryptjs.compareSync(req.body.password, user.password)) {
                    return res.status(200).json({ response: true })
                } else {
                    return res.status(200).json({ response: false })
                }
            }else{
                return res.status(200).json({ response: false })
            }
            
        } catch (error) {
            console.log()
            return res.status(500).json({ response: error })
        }

    }
}
