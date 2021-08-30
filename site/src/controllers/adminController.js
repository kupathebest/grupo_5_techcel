const fs = require('fs');
const path = require('path');
let celulares = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'celulares.json'), 'utf-8'));
const guardar = dato => fs.writeFileSync(path.join(__dirname, '../data/celulares.json'), JSON.stringify(dato, null, 2), "utf-8");
const toThousand = require('../utils/toThousand')
 
const {validationResult} = require('express-validator');

module.exports = {
    index : (req,res) =>{
        return res.render('admin/index',{
            celulares,
            toThousand
        });
    },
    add : (req,res) =>{
        return res.render('admin/productAdd');
    },
    agregar : (req,res) =>{
        const {nombreCorto,nombreLargo,marca,precio,categoria,pantallaP,procesadorP,memoriaP,almacenamientoP,expansionP,camaraP,bateriaP,osP,perfilP,pesoP,color,dosg,tresg,cuatrog,cincog,gprs,edge,sim,dimensiones,peso,displayTipo,displayTamanio,displayResolucion,densidad,proteccion,os,procesador,memoriaInterna,slot,camaraPrincipal,camaraVideo,camaraFrontal,wifi,bluetooth,gps,usb,nfc,infrarrojo,bateriaCapacidad,bateriaTipo,extraible,cargaRapida,cargaInalambrica} = req.body;
        let celular = {
            id: celulares[celulares.length -1].id + 1,
            nombreCorto : nombreCorto.trim(),
            nombreLargo : nombreLargo.trim(),
            marca : marca.trim(),
            precio : +precio,
            categoria : categoria.trim(),
            pantallaP : pantallaP.trim(),
            procesadorP : procesadorP.trim(),
            memoriaP : memoriaP.trim(),
            almacenamientoP : almacenamientoP.trim(),
            expansionP : expansionP.trim(),
            camaraP : camaraP.trim(),
            bateriaP : bateriaP.trim(),
            osP : osP.trim(),
            perfilP : perfilP.trim(),
            pesoP : pesoP.trim(),
            color : color.trim(),
            dosg : dosg.trim(),
            tresg : tresg.trim(),
            cuatrog : cuatrog.trim(),
            cincog : cincog.trim(),
            gprs : gprs.trim(),
            edge : edge.trim(),
            sim : sim.trim(),
            dimensiones : dimensiones.trim(),
            peso : peso.trim(),
            displayTipo : displayTipo.trim(),
            displayTamanio : displayTamanio.trim(),
            displayResolucion : displayResolucion.trim(),
            densidad : densidad.trim(),
            proteccion : proteccion.trim(),
            os : os.trim(),
            procesador : procesador.trim(),
            memoriaInterna : memoriaInterna.trim(),
            slot : slot.trim(),
            camaraPrincipal : camaraPrincipal.trim(),
            camaraVideo : camaraVideo.trim(),
            camaraFrontal : camaraFrontal.trim(),
            wifi : wifi.trim(),
            bluetooth : bluetooth.trim(),
            gps : gps.trim(),
            usb : usb.trim(),
            nfc : nfc.trim(),
            infrarrojo : infrarrojo.trim(),
            bateriaCapacidad : bateriaCapacidad.trim(),
            bateriaTipo : bateriaTipo.trim(),
            extraible : extraible.trim(),
            cargaRapida : cargaRapida.trim(),
            cargaInalambrica : cargaInalambrica.trim(),
            imagenCompleta : "",
            imagenFrente : "",
            imagenDorso : "",
        }
        celulares.push(celular);
        guardar(celulares);
        return res.redirect('/admin');    
    },
    edit: (req,res)=>{
     let celular = celulares.find(celular => celular.id === +req.params.id)
        
     return res.render("admin/productEdit",{
        celular,
       
    })
    
    },
    update:(req,res)=>{
        let errors = validationResult(req);
        let celular = celulares.find(celular => celular.id === +req.params.id)
        if(errors.isEmpty()){
            let {nombreCorto,nombreLargo,marca,precio,categoria,pantallaP,procesadorP,memoriaP,almacenamientoP,expansionP,camaraP,bateriaP,osP,perfilP,pesoP,color,dosg,tresg,cuatrog,cincog,gprs,edge,sim,dimensiones,peso,displayTipo,displayTamanio,displayResolucion,densidad,proteccion,os,procesador,memoriaInterna,slot,camaraPrincipal,camaraVideo,camaraFrontal,wifi,bluetooth,gps,usb,nfc,infrarrojo,bateriaCapacidad,bateriaTipo,extraible,cargaRapida,cargaInalambrica} = req.body;
        celulares.forEach(celular => {
            if(celular.id === +req.params.id){
                
            celular.nombreCorto = nombreCorto.trim(),
            celular.nombreLargo = nombreLargo.trim(),
            celular.marca = marca.trim(),
            celular.precio = +precio,
            celular.categoria = categoria.trim(),
            celular.pantallaP = pantallaP.trim(),
            celular.procesadorP = procesadorP.trim(),
            celular.memoriaP = memoriaP.trim(),
            celular.almacenamientoP = almacenamientoP.trim(),
            celular.expansionP = expansionP.trim(),
            celular.camaraP = camaraP.trim(),
            celular.bateriaP = bateriaP.trim(),
            celular.osP = osP.trim(),
            celular.perfilP = perfilP.trim(),
            celular.pesoP = pesoP.trim(),
            celular.color = color.trim(),
            celular.dosg = dosg.trim(),
            celular.tresg = tresg.trim(),
            celular.cuatrog = cuatrog.trim(),
            celular.cincog = cincog.trim(),
            celular.gprs = gprs.trim(),
            celular.edge = edge.trim(),
            celular.sim = sim.trim(),
            celular.dimensiones = dimensiones.trim(),
            celular.peso = peso.trim(),
            celular.displayTipo = displayTipo.trim(),
            celular.displayTamanio = displayTamanio.trim(),
            celular.displayResolucion = displayResolucion.trim(),
            celular.densidad = densidad.trim(),
            celular.proteccion = proteccion.trim(),
            celular.os = os.trim(),
            celular.procesador = procesador.trim(),
            celular.memoriaInterna = memoriaInterna.trim(),
            celular.slot = slot.trim(),
            celular.camaraPrincipal = camaraPrincipal.trim(),
            celular.camaraVideo = camaraVideo.trim(),
            celular.camaraFrontal = camaraFrontal.trim(),
            celular.wifi = wifi.trim(),
            celular.bluetooth = bluetooth.trim(),
            celular.gps = gps.trim(),
            celular.usb = usb.trim(),
            celular.nfc = nfc.trim(),
            celular.infrarrojo = infrarrojo.trim(),
            celular.bateriaCapacidad = bateriaCapacidad.trim(),
            celular.bateriaTipo = bateriaTipo.trim(),
            celular.extraible = extraible.trim(),
            celular.cargaRapida = cargaRapida.trim(),
            celular.cargaInalambrica = cargaInalambrica.trim()
            
            }
            
        }); 
        guardar(celulares);
        return res.redirect('/admin'); 
    }else{
        return res.render("admin/productEdit",{
            celular,
            errores : errors.mapped(),
        })

        }
        
    },
    destroy:(req,res) => {
        let celularesModificados = celulares.filter(celular => celular.id !== +req.params.id)
        guardar(celularesModificados)
        res.redirect('/admin');

    }



}