const ids = id => document.getElementById(id);
const buttonEliminar = document.querySelectorAll('#button-eliminar');

    const showPreview = data => {
        ids('preview').innerHTML = null;
     //  data.length >= 3 ? ids('agregar-imagen').classList.add('disabled') : ids('subir-imagen').classList.remove('disabled');
         data.forEach(image => {
            
            ids('preview').innerHTML +=


            `
            <div class="miniaturas" id="preview">   
            <div> 
            <img class="imagen-eliminar"  src="/images/equipos/${image.file}">
            <button id="button-eliminar" class="imagen-eliminar"  onclick="deleteImage(${image.id})">Eliminar</button>
            </div>         
            
            </div>
            `
        }) 
    }


    const deleteImage = async id => {
        try {
            let response = await fetch('/apis/delete-image/' + id);
            let result = await response.json()
            console.log(result.data)
            showPreview(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addImage = async (id,files) => {
        console.log(files)
        var data = new FormData();
        console.log(data)
        for (const file of files) {
            data.append('images',file,file.name)
        }
        console.log(data)

        try {
            let response = await fetch('/apis/add-image/' + id,{
                method : 'POST',
                body : data
            });
            let result = await response.json()
            showPreview(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    for (let i = 0; i < buttonEliminar.length; i++) {
        buttonEliminar[i].addEventListener("submit" , e => {
            e.preventDefault()
        })
    }
 