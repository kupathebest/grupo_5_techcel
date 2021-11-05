window.addEventListener('load',() =>{
    let forms = document.querySelectorAll('#eliminar');
    for (let i = 0; i < forms.length; i++) {
          forms[i].addEventListener('submit', event => {
        let eliminarResp = confirm('¿Eliminar producto?')       
        event.preventDefault()
        if(eliminarResp){
            forms[i].submit();
        }
    })  
        
    }
    })

    
    