const $ = id => document.getElementById(id);
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

window.addEventListener('load', () => {
    

    $('email').addEventListener('focus', () => {
            if($('email').value.trim() === ""){
                $('email-error').innerText = "* Debes ingresar tu email"
                $('email').classList.remove('input-success')
                $('email').classList.add('input-error')
                $('icono-error-email').classList.remove('ocultar')
                $('icono-error-email').classList.remove('error2')
                $('icono-error-email').classList.add('error')
            }
    })
    $('email').addEventListener('blur', () => {

        switch (true) {
            case !$('email').value.trim():
                $('email-error').innerText = "* Debes ingresar tu email"
                $('email').classList.remove('input-success')
                $('email').classList.add('input-error')
                $('icono-error-email').classList.remove('ocultar')
                $('icono-error-email').classList.remove('error2')
                $('icono-error-email').classList.add('error')

                break;
            case !emailRegex.test($('email').value):
                $('email-error').innerText = "Debes ingresar un email válido"
                $('email').classList.remove('input-success')
                $('email').classList.add('input-error')
                $('icono-error-email').classList.remove('ocultar')
                $('icono-error-email').classList.remove('error2')
                $('icono-error-email').classList.add('error')

                break;
            default:
                $('email').classList.remove('input-error')
                $('email-error').innerText = null
                $('icono-error-email').classList.add('ocultar')
                break;
        }
    })
    $('email').addEventListener('keydown', () => {
        $('email').classList.remove('input-error')
        $('email-error').innerText = null
        $('icono-error-email').classList.add('ocultar')
        $('span-error').innerText = null
        })

    $('password').addEventListener('focus',()=> {
            if($('password').value.trim() === ""){
                $('password-error').innerText = "* Debes ingresar la contraseña"
                $('password').classList.remove('input-success')
                $('password').classList.add('input-error')
                $('icono-error-password').classList.remove('ocultar')
                $('icono-error-password').classList.remove('error2')
                $('icono-error-password').classList.add('error')
                $('icono-success-password').classList.add('ocultar')
            }
    
        })

        $('password').addEventListener('blur', () => {
            if(!$('password').value.trim()){
                $('password-error').innerText = "* Debes ingresar la contraseña"
                $('password').classList.remove('input-success')
                $('password').classList.add('input-error')
                $('icono-error-password').classList.remove('ocultar')
                $('icono-error-password').classList.remove('error2')
                $('icono-error-password').classList.add('error')
                $('icono-success-password').classList.add('ocultar')
            }else{
                $('password').classList.remove('input-error')
                    $('password-error').innerText = null
                    $('icono-error-password').classList.add('ocultar')
                    
            }
        })
        
        $('password').addEventListener('keydown', () => {
            $('span-error').innerText = null
            $('password').classList.remove('input-error')
            $('password-error').innerText = null
            $('icono-error-password').classList.add('ocultar')
            $('email').classList.remove('input-error')
            $('icono-error-email').classList.add('ocultar')
        })

       

        $('form-login').addEventListener('submit', async e => {
            e.preventDefault();
            let elementsForm = $('form-login').elements;
            let errores = false

            for (let i = 0; i < elementsForm.length - 2; i++) {
            
                if(!elementsForm[i].value){
                    elementsForm[i].classList.add('input-error')
                    errores = true
                }
            }

            for (let i = 0; i < elementsForm.length - 2; i++) {
            
                if(elementsForm[i].classList.contains('input-error')){
                    $('span-error').innerText = "* Credenciales incorrectas"
                    errores = true
                }
                
            }

            try {
                let response = await fetch('/apis/verify-password',{
                    method : 'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({
                        email : e.target.email.value,
                        password : e.target.password.value
                    })
                })
                let result = await response.json();
    
                if(!result.response){
                    $('span-error').innerText = "* Credenciales incorrectas"
                    errores = true
                }
    
            } catch (error) {
                console.log(error)
            }

            if(!errores){
                $('form-login').submit()
            }
    
        })
    
})
