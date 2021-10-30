const $ = id => document.getElementById(id);
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

window.addEventListener('load', () => {
    

    $('email').addEventListener('focus', () => {
            if($('email').value.trim() === ""){
                $('email-error').innerText = "* El email es obligatorio"
                $('email').classList.remove('input-success')
                $('email').classList.add('input-error')
                $('icono-error-email').classList.remove('ocultar')
                $('icono-success-email').classList.add('ocultar')
            }
    })
    $('email').addEventListener('blur', () => {

        switch (true) {
            case !$('email').value.trim():
                $('email-error').innerText = "* El email es obligatorio"
                $('email').classList.remove('input-success')
                $('email').classList.add('input-error')
                $('icono-error-email').classList.remove('ocultar')
                $('icono-success-email').classList.add('ocultar')

                break;
            case !emailRegex.test($('email').value):
                $('email-error').innerText = "Debes ingresar un email válido"
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

    $('password').addEventListener('focus',()=> {
            if($('password').value.trim() === ""){
                $('password-error').innerText = "* Debes ingresar la contraseña"
                $('password').classList.remove('input-success')
                $('password').classList.add('input-error')
                $('icono-error-password').classList.remove('ocultar')
                $('icono-success-password').classList.add('ocultar')
            }
    
        })

        $('password').addEventListener('blur', () => {
            if(!$('password').value.trim()){
                $('password-error').innerText = "* Debes ingresar la contraseña"
                $('password').classList.remove('input-success')
                $('password').classList.add('input-error')
                $('icono-error-password').classList.remove('ocultar')
                $('icono-success-password').classList.add('ocultar')
            }else{
                $('password').classList.remove('input-error')
                    $('password-error').innerText = null
                    $('icono-error-password').classList.add('ocultar')
                    
            }
        })
        
        $('password').addEventListener('keydown', () => {
            $('password').classList.remove('input-error')
            $('password-error').innerText = null
            $('icono-error-password').classList.add('ocultar')
        })

       

        $('form-login').addEventListener('submit', async e => {
            e.preventDefault();
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
                }else{
                    $('form-login').submit()
                }
    
            } catch (error) {
                console.log(error)
            }
    
        })
    
})
 