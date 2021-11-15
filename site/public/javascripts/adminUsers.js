window.addEventListener('load',() =>{
    const $ = id => document.getElementById(id);
    let eliminar = document.querySelectorAll('#eliminar');
    let formularioEditar = document.querySelectorAll('#form-edit');
    let botonEdit = document.querySelectorAll('#edit-button');
    let pRol = document.querySelectorAll('#pRol');

    for (let i = 0; i < eliminar.length; i++) {
          eliminar[i].addEventListener('submit', event => {
        Swal.fire({
            title: 'Estas seguro que quieres eliminar el usuario?',
            text: "No la vas a poder recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title : 'Eliminado!',
                text : 'El usuario ah sido eliminada.',
                icon : 'success',
                showConfirmButton : false
              }
                
              )
              eliminar[i].submit();
            }
          })     
        event.preventDefault()
    })  
    }
    for (let i = 0; i < botonEdit.length; i++) {
      formularioEditar[i].addEventListener('submit', event => {
        event.preventDefault()
          Swal.fire({
            title: "Rol actualizado con éxito",
            icon : "success",
            showConfirmButton: false
          })
          formularioEditar[i].submit()
      })

      botonEdit[i].addEventListener('click', event => {
        event.preventDefault()
        pRol[i].classList.toggle('ocultar')
        formularioEditar[i].classList.toggle('ocultar')
      })
    }
})
