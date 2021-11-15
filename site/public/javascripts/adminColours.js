const addColour = async (name) => {
  let response = await fetch(window.origin + `/apis/add-colour?name=${name}`);
  let result = await response.json()

  return console.log(result)
}


window.addEventListener('load',() =>{
    const $ = id => document.getElementById(id);
    let eliminar = document.querySelectorAll('#eliminar');
    let formularioEditar = document.querySelectorAll('#form-edit');
    let botonEdit = document.querySelectorAll('#edit-button');
    let input = document.querySelectorAll('#input-edit');
    let pName = document.querySelectorAll('#colour-p');

    let agregar = $('agregar');

  agregar.addEventListener('click', async e => {
    const {value: colour} = await Swal.fire({
      title : 'Ingresa el nombre del color que quieres agregar',
      input: 'text',
      confirmButtonText: 'Agregar',
      showCancelButton: true,
      cancelButtonColor: '#FF0000'
    })
    if(!colour){
      Swal.fire({
        title : 'Debes ingresar un color',
        icon : 'error',
        confirmButtonText : 'ok'
      })
    }else{
      addColour(colour)
      Swal.fire({
        title : 'color agregado con exito',
        icon : 'success',
        showConfirmButton: false
      })
      location.reload()
    }
  })

    for (let i = 0; i < eliminar.length; i++) {
          eliminar[i].addEventListener('submit', event => {
        Swal.fire({
            title: 'Estas seguro que quieres eliminar el color?',
            text: "No lo vas a poder recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title : 'Eliminado!',
                text : 'El color ah sido eliminada.',
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
    for (let i = 0; i < formularioEditar.length; i++) {
      formularioEditar[i].addEventListener('submit', event => {
        event.preventDefault()
        if(!input[i].value){
          Swal.fire({
            title: "Error !!!!",
            text: "No puedes ingresar un color vacio",
            icon : "error"
          })
        }else{
          Swal.fire({
            title: "Color editado con éxito",
            icon : "success",
            showConfirmButton: false
          })
          formularioEditar[i].submit()
        }
      })

      botonEdit[i].addEventListener('click', e => {
        e.preventDefault()
        pName[i].classList.toggle('ocultar')
        formularioEditar[i].classList.toggle('ocultar')
      })
    }
})
