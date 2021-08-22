const fs = require('fs');
const path = require('path');
let celulares = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'celulares.json'), 'utf-8'));
const guardar = dato => fs.writeFileSync(path.join(__dirname, '../data/celulares.json'), JSON.stringify(dato, null, 2), "utf-8")
 

module.exports = {
    index : (req,res) =>{
        return res.render('admin/index');
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
    }


}