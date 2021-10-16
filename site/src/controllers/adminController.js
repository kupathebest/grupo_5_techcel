
const colores = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','colores.json'),'utf-8'));
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
        db.Product.findAll()
        .then(products =>{
            return res.render('admin/productAdd')
        })
    },
    agregar: (req, res) => {
        let errors = validationResult(req);
   
        if (errors.isEmpty()) {
            const { shortName, longName, brand, price, category, pantallaP, processorP, memoryP, storageP, expansionP, cameraP, batteryP, osP, profileP, pesweightPoP, color, twog, threeg, fourg, fiveg, gprs, edge, sim, displayType, displaySize, displayResolution, density, protection, mainCamera, videoCamera, frontCamera, wifi, bluetooth, gps, usb, nfc, infrared, fastCharge, wirelessCharge } = req.body;
            
            db.Product.create(
                {
                    shortName : shortName.trim(),
                    longName : longName.trim(),
                    brand : brand.trim(),
                    price : +price,
                    category : category.trim(),
                    color : color.trim(),
                    edge : edge.trim(),
                    displayP : displayP.trim(),
                    processorP : processorP.trim(),
                    memoryP : memoryP.trim(),
                    storageP: storageP.trim(),
                    expansionP : expansionP.trim(),
                    cameraP : cameraP.trim(),
                    batteryP: batteryP.trim(),
                    osP : osP.trim(),
                    profileP : profileP.trim(),
                    weightP : weightP.trim(),
                    twog : twog.trim(),
                    threeg : threeg.trim(),
                    fourg : fourg.trim(),
                    fiveg : fiveg.trim(),
                    gprs : gprs.trim(),
                    sim: sim.trim(),
                    mainCamera : mainCamera.trim(),
                    videoCamera : videoCamera.trim(),
                    frontCamera : frontCamera.trim(),
                    fastCharge : fastCharge.trim(),
                    wirelessCharge : wirelessCharge.trim(),
                    wifi : wifi.trim(),
                    bluetooth : bluetooth.trim(),
                    gps : gps.trim(),
                    usb : usb.trim(),
                    nfc : nfc.trim(),
                    infrared : infrared.trim(),
                    displayType : displayType.trim(),
                    displaySize : displaySize.trim(),
                    displayResolution : displayResolution.trim(),
                    density : density.trim(),
                    protection : protection.trim()
                }
            )

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

        if (errors.isEmpty()) {
            let { shortName, longName, brand, price, category, displayP, processorP, memoryP, storageP, expansionP, cameraP, batteryP, osP, profileP, weightP, colour, twog, threeg, fourg, fiveg, gprs, edge, sim, displayType, displaySize, displayResolution, density, protection, mainCamera, videocamera, frontCamera, wifi, bluetooth, gps, usb, nfc, infrared, fastCharge, wirelessCharge } = req.body;

            db.Product.update(
                
                    {
                        shortName : shortName.trim(),
                        longName : longName.trim(),
                        brand : brand.trim(),
                        price : +price,
                        category : category.trim(),
                        color : color.trim(),
                        edge : edge.trim(),
                        displayP : displayP.trim(),
                        processorP : processorP.trim(),
                        memoryP : memoryP.trim(),
                        storageP: storageP.trim(),
                        expansionP : expansionP.trim(),
                        cameraP : cameraP.trim(),
                        batteryP: batteryP.trim(),
                        osP : osP.trim(),
                        profileP : profileP.trim(),
                        weightP : weightP.trim(),
                        twog : twog.trim(),
                        threeg : threeg.trim(),
                        fourg : fourg.trim(),
                        fiveg : fiveg.trim(),
                        gprs : gprs.trim(),
                        sim: sim.trim(),
                        mainCamera : mainCamera.trim(),
                        videoCamera : videoCamera.trim(),
                        frontCamera : frontCamera.trim(),
                        fastCharge : fastCharge.trim(),
                        wirelessCharge : wirelessCharge.trim(),
                        wifi : wifi.trim(),
                        bluetooth : bluetooth.trim(),
                        gps : gps.trim(),
                        usb : usb.trim(),
                        nfc : nfc.trim(),
                        infrared : infrared.trim(),
                        displayType : displayType.trim(),
                        displaySize : displaySize.trim(),
                        displayResolution : displayResolution.trim(),
                        density : density.trim(),
                        protection : protection.trim()
                    },
                    {
                        where: {id:req.params.id}
                    }
                
            )

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

        db.Product.destroy(
            {
                where:{id:req.params.id}
            }
        )
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