const fs = require('fs');
const path = require('path');
let celulares = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'celulares.json'), 'utf-8'));
const guardar = dato => fs.writeFileSync(path.join(__dirname, '../data/celulares.json'), JSON.stringify(dato, null, 2), "utf-8");
const capitalize = require('../utils/capitalize');
const toThousand = require('../utils/toThousand')

const { validationResult } = require('express-validator');

module.exports = {
    index: (req, res) => {
        return res.render('admin/index', {
            celulares: JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'celulares.json'), 'utf-8')),
            toThousand
        });
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
            const { shortName, longName, brand, price, category, displayP, processorP, memoryP, storageP, expansionP, cameraP, batteryP, osP, profileP, weightP, colour, twog, threeg, fourg, fiveg, gprs, edge, sim, displayType, displaySize, displayResolution, density, protection, mainCamera, videoCamera, frontCamera, wifi, bluetooth, gps, usb, nfc, infrared, fastCharge, wirelessCharge } = req.body;
            let photos = [];

            req.files.forEach(image => {
                photos.push(image.filename)
            })

            let mobile = {
                id: mobiles[mobiles.length - 1].id + 1,
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
                batteryP:batteryP.trim(),
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
                photos
            }
            mobiles.push(mobile);

            guardar(mobiles);
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
            let { shortName, longName, brand, price, category, displayP, processorP, memoryP, storageP, expansionP, cameraP, batteryP, osP, profileP, weightP, colour, twog, threeg, fourg, fiveg, gprs, edge, sim, displayType, displaySize, displayResolution, density, protection, mainCamera, videocamera, frontCamera, wifi, bluetooth, gps, usb, nfc, infrared, fastCharging, wirelessCharging } = req.body;

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
                batteryP:batteryP.trim(),
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
                fastCharging: fastCharging.trim(),
                wirelessCharging: wirelessCharging.trim(),
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
        let celularesModificados = celulares.filter(celular => celular.id !== +req.params.id)
        guardar(celularesModificados)
        res.redirect('/admin');

    },
    search: (req, res) => {
        let busqueda = req.query.keywords.toLowerCase()
        let result = celulares.filter(celular => celular.nombreLargo.toLowerCase().includes(busqueda.trim()) || celular.marca.toLowerCase().includes(busqueda.trim()))
        return res.render('admin/resultsAdmin', {
            celulares: result,
            busqueda,
            toThousand,
        })
    }

}