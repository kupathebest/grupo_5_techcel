const {body} = require('express-validator');
const path = require('path');
const fs =require ('fs');
const db =require('../database/models');
const bcryptjs = require('bcryptjs');


module.exports = [
    body('email')
    .custom((value,{req}) => {
        return db.User.findOne({
            where : {
                email : value,
            }
        })
            .then(user => {
                if(!user || !bcryptjs.compareSync(req.body.password, user.password)){
                    return Promise.reject()
                }
            }).catch( () => Promise.reject('email y/o contraseña incorrectas'))
    })
] 
