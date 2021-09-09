const { check, body } = require('express-validator');


const productValidatorAdd = [

	check('nombreCorto')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('marca')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('precio')
		.notEmpty().withMessage('Este campo es obligatorio')
		.isInt().withMessage('Debe ser un número'),

	check('categoria')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('pantallaP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('procesadorP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('memoriaP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('almacenamientoP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('expansionP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('camaraP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('bateriaP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('osP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('perfilP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('pesoP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('dosg')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('tresg')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('cuatrog')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('cincog')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('bluetooth')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('usb')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('color')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	body('image')
		.custom((value, { req }) => {
			if (req.files.length != 0) {
				return true
			} else {
				return false
			}
		})
		.withMessage('Este campo es obligatorio'),


]

module.exports = productValidatorAdd