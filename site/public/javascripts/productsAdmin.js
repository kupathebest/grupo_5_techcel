window.addEventListener('load',() =>{
    let forms = document.querySelectorAll('#eliminar');
    for (let i = 0; i < forms.length; i++) {
          forms[i].addEventListener('submit', event => {
        Swal.fire({
            title: 'Estas seguro que quieres eliminar el producto?',
            text: "No lo vas a poder recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'El producto ah sido eliminado.',
                'success'
              )
              forms[i].submit();
            }
          })     
        event.preventDefault()
    })  
        
    }
    })


    
    