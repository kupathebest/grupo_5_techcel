let regExLetter = /^[A-Z ]+$/i;
let regExPass = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

window.addEventListener('load', () => {
    const $ = id => document.getElementById(id);
    let imgPreview = $('img-preview');
    let inputAvatar = $('avatar');
    let formProfile = $('form-profile');
    
    
    inputAvatar.addEventListener('change', (e) => {
    
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
    
        reader.onload = () => imgPreview.src = reader.result
    })

    $('name').addEventListener('focus', () => {
        if ($('name').value.trim() === "") {
            $('name-error').innerText = "* El nombre es obligatorio"
            $('name').classList.remove('input-success')
            $('name').classList.add('input-error')
            $('icono-error-name').classList.remove('ocultar')
            $('icono-success-name').classList.add('ocultar')
            $('error-empty').innerText = null;
        }
    })
    $('name').addEventListener('blur', () => {

        switch (true) {
            case !$('name').value.trim():
                $('name-error').innerText = "* El nombre es obligatorio"
                $('name').classList.remove('input-success')
                $('name').classList.add('input-error')
                $('icono-error-name').classList.remove('ocultar')
                $('icono-success-name').classList.add('ocultar')
                $('error-empty').innerText = null;

                break;
            case $('name').value.trim().length < 2:
                $('name-error').innerText = "* El nombre debe tener mas de 2 caracteres"
                $('name').classList.remove('input-success')
                $('name').classList.add('input-error')
                $('icono-error-name').classList.remove('ocultar')
                $('icono-success-name').classList.add('ocultar')
                $('error-empty').innerText = null;

                break;
            case !regExLetter.test($('name').value.trim()):
                $('name-error').innerText = "* Solo puede ingresar caracteres alfabéticos"
                $('name').classList.remove('input-success')
                $('name').classList.add('input-error')
                $('icono-error-name').classList.remove('ocultar')
                $('icono-success-name').classList.add('ocultar')
                $('error-empty').innerText = null;

                break;
            default:
                $('name').classList.remove('input-error')
                $('name').classList.add('input-success')
                $('name-error').innerText = null
                $('icono-error-name').classList.add('ocultar')
                $('icono-success-name').classList.remove('ocultar')
                $('error-empty').innerText = null;
                break;
        }
    })
    $('name').addEventListener('keydown', () => {
        $('name').classList.remove('input-error')
        $('name').classList.remove('input-success')
        $('name-error').innerText = null
        $('icono-error-name').classList.add('ocultar')
        $('icono-error-success').classList.add('ocultar')
        $('error-empty').innerText = null;
    })

    $('lastName').addEventListener('focus', () => {
        if ($('lastName').value.trim() === "") {
            $('lastName-error').innerText = "* El apellido es obligatorio"
            $('lastName').classList.remove('input-success')
            $('lastName').classList.add('input-error')
            $('icono-error-lastName').classList.remove('ocultar')
            $('icono-success-lastName').classList.add('ocultar')
            $('error-empty').innerText = null;
        }
    })
    $('lastName').addEventListener('blur', () => {

        switch (true) {
            case !$('lastName').value.trim():
                $('lastName-error').innerText = "* El apellido es obligatorio"
                $('lastName').classList.remove('input-success')
                $('lastName').classList.add('input-error')
                $('icono-error-lastName').classList.remove('ocultar')
                $('icono-success-lastName').classList.add('ocultar')
                $('error-empty').innerText = null;

                break;
            case $('lastName').value.trim().length < 2:
                $('lastName-error').innerText = "* El apellido debe tener mas de 2 caracteres"
                $('lastName').classList.remove('input-success')
                $('lastName').classList.add('input-error')
                $('icono-error-lastName').classList.remove('ocultar')
                $('icono-success-lastName').classList.add('ocultar')
                $('error-empty').innerText = null;

                break;
            case !regExLetter.test($('lastName').value.trim()):
                $('lastName-error').innerText = "* Solo puede ingresar caracteres alfabéticos"
                $('lastName').classList.remove('input-success')
                $('lastName').classList.add('input-error')
                $('icono-error-lastName').classList.remove('ocultar')
                $('icono-success-lastName').classList.add('ocultar')
                $('error-empty').innerText = null;

                break;
            default:
                $('lastName').classList.remove('input-error')
                $('lastName').classList.add('input-success')
                $('lastName-error').innerText = null
                $('icono-error-lastName').classList.add('ocultar')
                $('icono-success-lastName').classList.remove('ocultar')
                $('error-empty').innerText = null;
                break;
        }
    })
    $('lastName').addEventListener('keydown', () => {
        $('lastName').classList.remove('input-error')
        $('lastName-error').innerText = null
        $('icono-error-lastName').classList.add('ocultar')
        $('error-empty').innerText = null;
    })

    $('password').addEventListener('blur', () => {
        if ($('password').value === "") {
            $('password-error').innerText = "* Debes ingresar tu contraseña para guardar los cambios"
            $('password').classList.remove('input-success')
            $('password').classList.add('input-error')
            $('icono-error-password').classList.remove('ocultar')
            $('icono-success-password').classList.add('ocultar')
            $('error-empty').innerText = null;
        } else {
            $('password').classList.remove('input-error')
            $('password-error').innerText = null
            $('icono-error-password').classList.add('ocultar')
            $('error-empty').innerText = null;
        }
    })

    $('password').addEventListener('focus', () => {
        $('password').classList.remove('input-error')
        $('password-error').innerText = null
        $('icono-error-password').classList.add('ocultar')
        $('error-empty').innerText = null;
    })

    $('password1').addEventListener('blur', () => {
        if($('password1').value !== ""){
            if (!regExPass.test($('password1').value)) {
                $('password1-error').innerText = "* Ingrese mayúscula, número y de 8 a 16 caracteres"
                $('password1').classList.remove('input-success')
                $('password1').classList.add('input-error')
                $('icono-error-password1').classList.remove('ocultar')
                $('icono-success-password1').classList.add('ocultar')
                $('error-empty').innerText = null;
            } else {
                $('password1').classList.remove('input-error')
                $('password1-error').innerText = null
                $('icono-error-password1').classList.add('ocultar')
                $('icono-success-password1').classList.add('ocultar')
                $('error-empty').innerText = null;
            }
        }else{
            $('password1').classList.remove('input-error')
                $('password1-error').innerText = null
                $('icono-error-password1').classList.add('ocultar')
                $('icono-success-password1').classList.add('ocultar')
                $('error-empty').innerText = null;
        }
        
    })

    $('password1').addEventListener('focus', () => {
        $('password1').classList.remove('input-error')
        $('password1-error').innerText = null
        $('icono-error-password1').classList.add('ocultar')
        $('password2').classList.remove('input-error')
        $('password2').classList.remove('input-success')
        $('password2-error').innerText = null
        $('icono-error-password2').classList.add('ocultar')
        $('icono-success-password2').classList.add('ocultar')
        $('error-empty').innerText = null;
    })

    $('password2').addEventListener('blur',() => {
        if($('password1').value !== $('password2').value){
            $('password2-error').innerText = "* Las contraseñas no coinciden"
            $('password2').classList.remove('input-success')
            $('password2').classList.add('input-error')
            $('icono-error-password2').classList.remove('ocultar')
            $('icono-success-password2').classList.add('ocultar')
            $('error-empty').innerText = null;
        }else{
            $('password2').classList.remove('input-error')
            $('password2-error').innerText = null
            $('icono-error-password2').classList.add('ocultar')
            $('icono-success-password2').classList.add('ocultar')
            $('error-empty').innerText = null;
        }
    })
    $('password2').addEventListener('focus',()=> {
        $('password2').classList.remove('input-error')
        $('error-empty').innerText = null;

    })

    formProfile.addEventListener('submit', async event => {
        event.preventDefault();

        let elementsForm = formProfile.elements;
        
        let error = false;

        for (let i = 0; i < elementsForm.length - 6; i++) {
            
            if(!elementsForm[i].value){
                elementsForm[i].classList.add('input-error')
                $('error-empty').innerText = "Los campos señalados son obligatorios";
                console.log(elementsForm)
                error = true
            }
        }

        for (let i = 0; i < elementsForm.length - 6; i++) {
            
            if(elementsForm[i].classList.contains('input-error')){
                error = true
            }
        }

        if(elementsForm[0].classList.contains('input-error')){
            error = true 
        }
        if(elementsForm[1].classList.contains('input-error')){
            error = true
        }
        
        if(elementsForm[5].value){
            if(elementsForm[5].value !== elementsForm[6].value){
                $('password2-error').innerText = "* Las contraseñas no coinciden"
                $('icono-error-password2').classList.remove('ocultar')
                error = true
            }
        }else{
            $('password1').classList.remove('input-error')
            $('password1-error').innerText = null
        }

        try {
            let response = await fetch('/apis/verify-password',{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    email : event.target.email.value,
                    password : event.target.password.value
                })
            })
            let result = await response.json();

            if(elementsForm[3].classList.contains('input-error')){
                $('password-error').innerText = "* Debes ingresar tu contraseña para guardar los cambios"
                $('icono-error-password').classList.remove('ocultar')
                error = true
            }else if(!result.response){
                $('password-error').innerText = "* Contraseña incorrecta"
                error = true
            }

        } catch (error) {
            console.log(error)
        }

        if(!error){
            $('form-profile').submit()
        }
    })

    
})