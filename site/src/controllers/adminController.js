const fs = require('fs');
const path = require('path');

const toThousand = require('../utils/toThousand');

const db = require('../database/models');
const { Op } = require('sequelize');

const { validationResult } = require('express-validator');

module.exports = {
    index: (req, res) => {

        db.Product.findAll({
            include: ['category', 'images', 'colour', 'mainFeature', 'display', 'camera', 'net', 'connectivity', 'battery']
        })
            .then(celulares => {
                return res.render('admin/index', {
                    celulares,
                    toThousand
                })
            })
            .catch(error => console.log(error))
    },
    add: (req, res) => {
        return res.render('admin/productAdd');
    },
    agregar: (req, res) => {
        let errors = validationResult(req);

        if (req.fileValidationError) {
            let image = {
                param: 'image',
                msg: req.fileValidationError,
            }
            errors.errores.push(image)
        }

        if (errors.isEmpty()) {
            const { nombreCorto, nombreLargo, marca, precio, categoria, pantallaP, procesadorP, memoriaP, almacenamientoP, expansionP, camaraP, bateriaP, osP, perfilP, pesoP, color, dosg, tresg, cuatrog, cincog, gprs, edge, sim, displayTipo, displayTamanio, displayResolucion, densidad, proteccion, camaraPrincipal, camaraVideo, camaraFrontal, wifi, bluetooth, gps, usb, nfc, infrarrojo, cargaRapida, cargaInalambrica } = req.body;
            let photos = [];

            req.files.forEach(image => {
                photos.push(image.filename)
            })

            let celular = {
                id: celulares[celulares.length - 1].id + 1,
                nombreCorto: nombreCorto.trim(),
                nombreLargo: nombreLargo.trim(),
                marca: marca.trim(),
                precio: +precio,
                categoria: categoria.trim(),
                pantallaP: pantallaP.trim(),
                procesadorP: procesadorP.trim(),
                memoriaP: memoriaP.trim(),
                almacenamientoP: almacenamientoP.trim(),
                expansionP: expansionP.trim(),
                camaraP: camaraP.trim(),
                bateriaP: bateriaP.trim(),
                osP: osP.trim(),
                perfilP: perfilP.trim(),
                pesoP: pesoP.trim(),
                color: color.trim(),
                dosg: dosg.trim(),
                tresg: tresg.trim(),
                cuatrog: cuatrog.trim(),
                cincog: cincog.trim(),
                gprs: gprs.trim(),
                edge: edge.trim(),
                sim: sim.trim(),
                displayTipo: displayTipo.trim(),
                displayTamanio: displayTamanio.trim(),
                displayResolucion: displayResolucion.trim(),
                densidad: densidad.trim(),
                proteccion: proteccion.trim(),
                camaraPrincipal: camaraPrincipal.trim(),
                camaraVideo: camaraVideo.trim(),
                camaraFrontal: camaraFrontal.trim(),
                wifi: wifi.trim(),
                bluetooth: bluetooth.trim(),
                gps: gps.trim(),
                usb: usb.trim(),
                nfc: nfc.trim(),
                infrarrojo: infrarrojo.trim(),
                cargaRapida: cargaRapida.trim(),
                cargaInalambrica: cargaInalambrica.trim(),
                photos
            }
            celulares.push(celular);

            guardar(celulares);
            return res.redirect('/admin');
        }
        else {
            return res.render('admin/productAdd', {
                errores: errors.mapped(),
                old: req.body
            })

        };
    },
    edit: (req, res) => {
        let mobile = mobiles.find(mobile => mobile.id === +req.params.id)

        return res.render("admin/productEdit", {
            mobile
        })

    },
    update: (req, res) => {
        let errors = validationResult(req);
        let photos = [];
        let mobile = mobiles.find(mobile => mobile.id === +req.params.id);

        if (req.fileValidationError) {
            let image = {
                param: 'image',
                msg: req.fileValidationError,
            }
            errors.errores.push(image)
        }
        if (errors.isEmpty()) {
            let { shortName, longName, brand, price, category, displayP, processorP, memoryP, storageP, expansionP, cameraP, batteryP, osP, profileP, weightP, colour, twog, threeg, fourg, fiveg, gprs, edge, sim, displayType, displaySize, displayResolution, density, protection, mainCamera, videocamera, frontCamera, wifi, bluetooth, gps, usb, nfc, infrared, fastCharge, wirelessCharge } = req.body;

            if (req.files.length != 0) {
                req.files.forEach(image => {
                    photos.push(image.filename)
                });
                mobile.photos.forEach(photo => {
                    if (fs.existsSync(path.join(__dirname, '..', 'public', 'images', 'equipos', photo))) {
                        fs.unlinkSync(path.join(__dirname, '..', 'public', 'images', 'equipos', photo))
                    }
                })
            }

            let mobileEdit = {
                id: +req.params.id,
                shortName: shortName.trim(),
                longName: longName.trim(),
                brand: brand.trim(),
                price: +price,
                category: category.trim(),
                displayP: displayP.trim(),
                processorP: processorP.trim(),
                memoryP: memoryP.trim(),
                storageP: storageP.trim(),
                expansionP: expansionP.trim(),
                cameraP: cameraP.trim(),
                batteryP: batteryP.trim(),
                osP: osP.trim(),
                profileP: profileP.trim(),
                weightP: weightP.trim(),
                colour: colour.trim(),
                twog: twog.trim(),
                threeg: threeg.trim(),
                fourg: fourg.trim(),
                fiveg: fiveg.trim(),
                gprs: gprs.trim(),
                edge: edge.trim(),
                sim: sim.trim(),
                displayType: displayType.trim(),
                displaySize: displaySize.trim(),
                displayResolution: displayResolution.trim(),
                density: density.trim(),
                protection: protection.trim(),
                mainCamera: mainCamera.trim(),
                videoCamera: videocamera.trim(),
                frontCamera: frontCamera.trim(),
                wifi: wifi.trim(),
                bluetooth: bluetooth.trim(),
                gps: gps.trim(),
                usb: usb.trim(),
                nfc: nfc.trim(),
                infrared: infrared.trim(),
                fastCharge: fastCharge.trim(),
                wirelessCharge: wirelessCharge.trim(),
                photos: req.files.length != 0 ? photos : mobile.photos
            };

            let modificados = mobiles.map(mobile => mobile.id === +req.params.id ? mobileEdit : mobile);

            guardar(modificados);
            return res.redirect('/admin');

        } else {
            return res.render("admin/productEdit", {
                mobile,
                errores: errors.mapped(),
                old: req.body
            })
        }

    },
    destroy: (req, res) => {

        db.Product.findByPk(req.params.id, {
            include: ['category', 'images', 'colour', 'mainFeature', 'display', 'camera', 'net', 'connectivity', 'battery']
        })
            .then(celulares => {
                celulares.images.forEach(image => {
                    if (fs.existsSync(path.join(__dirname, '../public/images', image.file))) {
                        fs.unlinkSync(path.join(__dirname, '../public/images', image.file))
                    }
                });
                db.Product.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                    .then(() => {
                        return res.redirect('/admin')
                    })
            })
            .catch(error => console.log(error))

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