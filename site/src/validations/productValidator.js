const{ check } = require('express-validator');

const productEditValidator=[

    check('nombreCorto')
    .notEmpty()
    .withMessage('Este campo es obligatorio'),

    check('nombreLargo')
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
	
	check('peso')
	.notEmpty()
	.withMessage('Este campo es obligarorio'),

	check('color')
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

	check('gprs')
	.notEmpty()
    .withMessage('Este campo es obligatorio'), 

	check('edge') 
 	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('sim') 
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

    check('dimensiones') 
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('peso')
 	.notEmpty()
    .withMessage('Este campo es obligatorio'),
 
	check('displayTipo') 
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('displayTamanio')
	.notEmpty()
    .withMessage('Este campo es obligatorio'),
 
	check('displayResolucion') 
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('densidad')
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('proteccion')
	.notEmpty()
	.withMessage('Este campo es obligatorio'),

	check('os')
 	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('procesador')
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

 	check('memoriaInterna')
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('slot')
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

 	check('camaraPrincipal')
	.notEmpty()
    .withMessage('Este campo es obligatorio'),
 
	check('camaraVideo')
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('camaraFrontal')
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('wifi')
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('bluetooth')
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('gps')
	.notEmpty()
    .withMessage('Este campo es obligatorio'), 

	check('usb')
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

    check('nfc') 
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('infrarrojo') 
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('bateriaCapacidad') 
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('bateriaTipo') 
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('extraible')
	.notEmpty()
    .withMessage('Este campo es obligatorio'), 

	check('cargaRapida') 
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

	check('cargaInalambrica') 
	.notEmpty()
    .withMessage('Este campo es obligatorio'),

  
]

module.exports = productEditValidator