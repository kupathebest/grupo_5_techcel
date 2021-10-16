const { check, body } = require('express-validator');


const productValidatorEdit = [

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

	check('twoG')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('threeG')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('fourG')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('fiveG')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('bluethoot')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('usb')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	check('colour')
		.notEmpty()
		.withMessage('Este campo es obligatorio'),

	

]

module.exports = productValidatorEdit;