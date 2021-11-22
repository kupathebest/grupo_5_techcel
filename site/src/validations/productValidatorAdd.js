const { check, body } = require('express-validator');


const productValidatorAdd = [

	check('shortName')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('brand')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('price')
		.notEmpty().withMessage('Este campo es obligatorio')
		.isInt().withMessage('Debe ser un número'),

	check('category')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('displayP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('processorP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('memoryP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('storageP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('expansionP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('cameraP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('batteryP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('osP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('profileP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('weightP')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('twog')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('threeg')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('fourg')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('fiveg')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('bluetooth')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('usb')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('colour')
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
	body('image')
		.custom((value, { req }) => {
			if (req.files.length === 3) {
				return true
			} else {
				return false
			}
		})
		.withMessage('Debes agregar 3 imagenes'),


]

module.exports = productValidatorAdd