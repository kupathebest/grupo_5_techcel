window.addEventListener('load',() =>{
    const $ = id => document.getElementById(id);
    $('provincia').addEventListener('change', e => {
        console.log(e.target.value)
        if(e.target.value == 2 ){
            $('icono-buenos-aires').classList.remove('ocultar')
            $('texto-buenos-aires').classList.remove('ocultar')
        }else if(e.target.value != 2 ){
            $('icono-buenos-aires').classList.add('ocultar')
            $('texto-buenos-aires').classList.add('ocultar')
        }
        if(e.target.value == 1 ){
            $('icono-interior').classList.remove('ocultar')
            $('texto-interior').classList.remove('ocultar')
        }else if(e.target.value != 1 ){
            $('icono-interior').classList.add('ocultar')
            $('texto-interior').classList.add('ocultar')
        }
        if(e.target.value == 20 || e.target.value == 8 || e.target.value == 7 || e.target.value == 11){
            $("icono-santa-fe").classList.remove('ocultar')
            $("texto-santa-fe").classList.remove('ocultar')
        }else if(e.target.value != 20 || e.target.value != 8 || e.target.value != 7 || e.target.value != 11){
            $("icono-santa-fe").classList.add('ocultar')
            $("texto-santa-fe").classList.add('ocultar')
        }
         if(e.target.value == 12 || e.target.value == 6 || e.target.value == 18){
            $("icono-mendoza").classList.remove('ocultar')
            $("texto-mendoza").classList.remove('ocultar')
        }else if(e.target.value != 12 || e.target.value != 6 || e.target.value != 18){
            $("icono-mendoza").classList.add('ocultar')
            $("texto-mendoza").classList.add('ocultar')
    }
       if(e.target.value == 23 || e.target.value == 16 || e.target.value == 17){
            $("icono-tucuman").classList.remove('ocultar')
            $("texto-tucuman").classList.remove('ocultar')
        }else if(e.target.value != 23 || e.target.value != 16 || e.target.value != 17){
            $("icono-tucuman").classList.add('ocultar')
            $("texto-tucuman").classList.add('ocultar')
        }
        if(e.target.value == 3 || e.target.value == 10 || e.target.value == 9 || e.target.value == 13 || e.target.value == 4){
            $("icono-catamarca").classList.remove('ocultar')
            $("texto-catamarca").classList.remove('ocultar')
        }else if(e.target.value != 3 || e.target.value != 10 || e.target.value != 9 || e.target.value != 13 || e.target.value != 4){
            $("icono-catamarca").classList.add('ocultar')
            $("texto-catamarca").classList.add('ocultar')
        }
        if(e.target.value == 14 || e.target.value == 5 || e.target.value == 21 ){
            $("icono-neuquen").classList.remove('ocultar')
            $("texto-neuquen").classList.remove('ocultar')
        }else if(e.target.value != 14 || e.target.value != 5 || e.target.value != 21){
            $("icono-neuquen").classList.add('ocultar')
            $("texto-neuquen").classList.add('ocultar')
        }
        if(e.target.value == 15 || e.target.value == 19 || e.target.value == 22){
            $("icono-rio-negro").classList.remove('ocultar')
            $("texto-rio-negro").classList.remove('ocultar')
        }else if(e.target.value != 15 || e.target.value != 19 || e.target.valrio-negro){
            $("icono-rio-negro").classList.add('ocultar')
            $("texto-rio-negro").classList.add('ocultar')
        }
        if(e.target.value == 24 ){
            $('icono-costa').classList.remove('ocultar')
            $('texto-costa').classList.remove('ocultar')
        }else if(e.target.value != 24 ){
            $('icono-costa').classList.add('ocultar')
            $('texto-costa').classList.add('ocultar')
        }
    })
}) 
