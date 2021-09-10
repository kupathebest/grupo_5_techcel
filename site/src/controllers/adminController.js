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
        let celular = celulares.find(celular => celular.id === +req.params.id)

        return res.render("admin/productEdit", {
            celular
        })

    },
    update: (req, res) => {
        let errors = validationResult(req);
        let photos = [];
        let celular = celulares.find(celular => celular.id === +req.params.id);

        if (req.fileValidationError) {
            let image = {
                param: 'image',
                msg: req.fileValidationError,
            }
            errors.errores.push(image)
        }
        if (errors.isEmpty()) {
            let { nombreCorto, nombreLargo, marca, precio, categoria, pantallaP, procesadorP, memoriaP, almacenamientoP, expansionP, camaraP, bateriaP, osP, perfilP, pesoP, color, dosg, tresg, cuatrog, cincog, gprs, edge, sim, displayTipo, displayTamanio, displayResolucion, densidad, proteccion, camaraPrincipal, camaraVideo, camaraFrontal, wifi, bluetooth, gps, usb, nfc, infrarrojo, cargaRapida, cargaInalambrica } = req.body;

            if (req.files.length != 0) {
                req.files.forEach(image => {
                    photos.push(image.filename)
                });
                celular.photos.forEach(photo => {
                    if (fs.existsSync(path.join(__dirname, '..', 'public', 'images', 'equipos', photo))) {
                        fs.unlinkSync(path.join(__dirname, '..', 'public', 'images', 'equipos', photo))
                    }
                })
            }

            let celularEdit = {
                id: +req.params.id,
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
                photos: req.files.length != 0 ? photos : celular.photos
            };

            let modificados = celulares.map(celular => celular.id === +req.params.id ? celularEdit : celular);

            guardar(modificados);
            return res.redirect('/admin');

        } else {
            return res.render("admin/productEdit", {
                celular,
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