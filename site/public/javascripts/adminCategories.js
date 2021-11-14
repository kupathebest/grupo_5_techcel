const addCategory = async (name) => {
  let response = await fetch(window.origin + `/apis/add-category?name=${name}`);
  let result = await response.json()

  return console.log(result)
}


window.addEventListener('load',() =>{
    const $ = id => document.getElementById(id);
    let eliminar = document.querySelectorAll('#eliminar');
    let editar = document.querySelectorAll('#editar');
    let agregar = $('agregar');

  agregar.addEventListener('click', async e => {
    const {value: category} = await Swal.fire({
      title : 'Ingresa el nombre de la categoria que quieres agregar',
      input: 'text',
      confirmButtonText: 'agregar'
    })
    if(!category){
      Swal.fire({
        title : 'Debes ingresar una categoria',
        icon : 'error',
        confirmButtonText : 'ok'
      })
    }else{
      addCategory(category)
      Swal.fire({
        title : 'Categoria agregada con exito',
        icon : 'success',
        
      })
      location.reload()
    }
  })

    for (let i = 0; i < eliminar.length; i++) {
          eliminar[i].addEventListener('submit', event => {
        Swal.fire({
            title: 'Estas seguro que quieres eliminar la categoria?',
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
                text : 'La categoria ah sido eliminado.',
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
})
