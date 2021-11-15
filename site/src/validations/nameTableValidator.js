const { check } = require('express-validator');

module.exports = [
    check("name")
    .notEmpty().withMessage("* debes ingresar la categoria")
]