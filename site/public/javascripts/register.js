const $ = id => document.getElementById(id);
const regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let regExLetter = /^[A-Z ]+$/i;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;


const emailVerify = async (email) => {
    try {
        let response = await fetch(window.origin + '/apis/get-emails');
        let result = await response.json()

        return result.data.includes(email)


    } catch (error) {
        console.log(error)
    }
}

window.addEventListener('load', () => {

    $('name').addEventListener('focus', () => {
        if ($('name').value.trim() === "") {
            $('name-error').innerText = "* El nombre es obligatorio"
            $('name').classList.remove('input-success')
            $('name').classList.add('input-error')
            $('icono-error-name').classList.remove('ocultar')
            $('icono-success-name').classList.add('ocultar')
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

                break;
            case $('name').value.trim().length < 2:
                $('name-error').innerText = "* El nombre debe tener mas de 2 caracteres"
                $('name').classList.remove('input-success')
                $('name').classList.add('input-error')
                $('icono-error-name').classList.remove('ocultar')
                $('icono-success-name').classList.add('ocultar')

                break;
            case !regExLetter.test($('name').value.trim()):
                $('name-error').innerText = "* Solo puede ingresar caracteres alfabéticos"
                $('name').classList.remove('input-success')
                $('name').classList.add('input-error')
                $('icono-error-name').classList.remove('ocultar')
                $('icono-success-name').classList.add('ocultar')

                break;
            default:
                $('name').classList.remove('input-error')
                $('name').classList.add('input-success')
                $('name-error').innerText = null
                $('icono-error-name').classList.add('ocultar')
                $('icono-success-name').classList.remove('ocultar')
                break;
        }
    })
    $('name').addEventListener('keydown', () => {
        $('name').classList.remove('input-error')
        $('name-error').innerText = null
        $('icono-error-name').classList.add('ocultar')
    })

    $('lastName').addEventListener('focus', () => {
        if ($('lastName').value.trim() === "") {
            $('lastName-error').innerText = "* El apellido es obligatorio"
            $('lastName').classList.remove('input-success')
            $('lastName').classList.add('input-error')
            $('icono-error-lastName').classList.remove('ocultar')
            $('icono-success-lastName').classList.add('ocultar')
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

                break;
            case $('lastName').value.trim().length < 2:
                $('lastName-error').innerText = "* El apellido debe tener mas de 2 caracteres"
                $('lastName').classList.remove('input-success')
                $('lastName').classList.add('input-error')
                $('icono-error-lastName').classList.remove('ocultar')
                $('icono-success-lastName').classList.add('ocultar')

                break;
            case !regExLetter.test($('lastName').value.trim()):
                $('lastName-error').innerText = "* Solo puede ingresar caracteres alfabéticos"
                $('lastName').classList.remove('input-success')
                $('lastName').classList.add('input-error')
                $('icono-error-lastName').classList.remove('ocultar')
                $('icono-success-lastName').classList.add('ocultar')

                break;
            default:
                $('lastName').classList.remove('input-error')
                $('lastName').classList.add('input-success')
                $('lastName-error').innerText = null
                $('icono-error-lastName').classList.add('ocultar')
                $('icono-success-lastName').classList.remove('ocultar')
                break;
        }
    })
    $('lastName').addEventListener('keydown', () => {
        $('lastName').classList.remove('input-error')
        $('lastName-error').innerText = null
        $('icono-error-lastName').classList.add('ocultar')
    })

    $('email').addEventListener('blur', async () => {

        switch (true) {
            case !regExEmail.test($('email').value):
                $('email-error').innerText = "* Tiene que ser un email válido"
                $('email').classList.remove('input-success')
                $('email').classList.add('input-error')
                $('icono-error-email').classList.remove('ocultar')
                $('icono-success-email').classList.add('ocultar')
                break;
            case await emailVerify($('email').value):
                $('email-error').innerText = "* El email ya está registrado"
                $('email').classList.remove('input-success')
                $('email').classList.add('input-error')
                $('icono-error-email').classList.remove('ocultar')
                $('icono-success-email').classList.add('ocultar')
                break;
            default:
                $('email').classList.remove('input-error')
                $('email').classList.add('input-success')
                $('email-error').innerText = null
                $('icono-error-email').classList.add('ocultar')
                $('icono-success-email').classList.remove('ocultar')
                break;
        }
    })

    $('email').addEventListener('keydown', () => {
        $('email').classList.remove('input-error')
        $('email-error').innerText = null
        $('icono-error-email').classList.add('ocultar')
    })

    $('password').addEventListener('blur', () => {
        if (!regExPass.test($('password').value)) {
            $('password-error').innerText = "* Ingrese mayúscula, número y de 8 a 16 caracteres"
            $('password').classList.remove('input-success')
            $('password').classList.add('input-error')
            $('icono-error-password').classList.remove('ocultar')
            $('icono-success-password').classList.add('ocultar')
        } else {
            $('password').classList.remove('input-error')
            $('password').classList.add('input-success')
            $('password-error').innerText = null
            $('icono-error-password').classList.add('ocultar')
            $('icono-success-password').classList.remove('ocultar')
        }
    })

    $('password').addEventListener('focus', () => {
        $('password').classList.remove('input-error')
        $('password-error').innerText = null
        $('icono-error-password').classList.add('ocultar')
        $('password2').classList.remove('input-error')
        $('password2').classList.remove('input-success')
        $('password2-error').innerText = null
        $('icono-error-password2').classList.add('ocultar')
        $('icono-success-password2').classList.add('ocultar')
    })

    $('password2').addEventListener('blur',() => {
        if($('password').value !== $('password2').value){
            $('password2-error').innerText = "Las contraseñas no coinciden"
            $('password2').classList.remove('input-success')
            $('password2').classList.add('input-error')
            $('icono-error-password2').classList.remove('ocultar')
            $('icono-success-password2').classList.add('ocultar')
        }else if($('password').value == ""){
            $('password2-error').innerText = "Debes ingresar una contraseña"
            $('password2').classList.remove('input-success')
            $('password2').classList.add('input-error')
            $('icono-error-password2').classList.remove('ocultar')
            $('icono-success-password2').classList.add('ocultar')
        }else{
            $('password2').classList.remove('input-error')
            $('password2').classList.add('input-success')
            $('password2-error').innerText = null
            $('icono-error-password2').classList.add('ocultar')
            $('icono-success-password2').classList.remove('ocultar')
        }
    })
    $('password2').addEventListener('focus',()=> {
        $('password2').classList.remove('input-error')

    })

    $('terms').addEventListener('click', () => {
        $('terms-label').classList.toggle('check-success');
        $('terms-label').classList.remove('check-error');
        $('terms-error').innerText = null

    })

    $('form-register').addEventListener('submit', event => {
        event.preventDefault();

        let elementsForm = $('form-register').elements;
        
        let error = false;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            
            if(!elementsForm[i].value){
                elementsForm[i].classList.add('input-error')
                $('error-empty').innerText = "Los campos señalados son obligatorios";
                error = true
            }
        }

        if(!$('terms').checked) {
            
            $('terms').classList.add('check-error')
            $('terms-error').innerText = "Debes aceptar los términos y condiciones";
            error = true
        }

        for (let i = 0; i < elementsForm.length - 1; i++) {
            
            if(elementsForm[i].classList.contains('input-error')){
                error = true
            }
        }

        if(!elementsForm[0].value){
            $('name-error').innerText = "* El nombre es obligatorio"
            $('icono-error-name').classList.remove('ocultar')
        }
        if(!elementsForm[1].value){
            $('lastName-error').innerText = "* El apellido es obligatorio"
            $('icono-error-lastName').classList.remove('ocultar')
        }
        if(!elementsForm[2].value){
            $('email-error').innerText = "* El email es obligatorio"
            $('icono-error-email').classList.remove('ocultar')
        }
        if(!elementsForm[3].value){
            $('password-error').innerText = "* Ingrese mayúscula, número y de 8 a 16 caracteres"
            $('icono-error-password').classList.remove('ocultar')
        }
        if(!elementsForm[4].value){
            $('password2-error').innerText = "* Las contraseñas no coinciden"
            $('icono-error-password2').classList.remove('ocultar')
        }

       

        if(!error){
            $('form-register').submit()
        }
    })

})