let regExLetter = /^[A-Z ]+$/i;
const regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

window.addEventListener('load', () => {
    const $ = id => document.getElementById(id);

    $('name').addEventListener('blur', () => {

        switch (true) {
            case !$('name').value.trim():
                $('name-error').innerText = "* El nombre es obligatorio"
                $('name').classList.add('input-error')
                break;
            case !regExLetter.test($('name').value.trim()):
                $('name-error').innerText = "* Solo puede ingresar caracteres alfabéticos"
                $('name').classList.add('input-error')
                break;
            default:
                $('name-error').innerText = null
                $('name').classList.remove('input-error')
                break;
        }
    })
    $('name').addEventListener('keydown', () => {
        $('name-error').innerText = null
        $('name').classList.remove('input-error')
    })

    $('phone').addEventListener('focus', () => {
        if ($('phone').value.trim() === "") {
            $('phone-error').innerText = "* El telefono es obligatorio"
            $('phone').classList.add('input-error')
        }
    })
    $('phone').addEventListener('blur', () => {
        if(!$('phone').value.trim()){
            $('phone-error').innerText = "* El telefono es obligatorio"
            $('phone').classList.add('input-error')
        }else{
            $('phone-error').innerText = null
            $('phone').classList.remove('input-error')
        }
    })
    $('phone').addEventListener('keydown', () => {
        $('phone-error').innerText = null
        $('phone').classList.remove('input-error')
    })

    $('email').addEventListener('blur', async () => {
        if(!regExEmail.test($('email').value)){
            $('email-error').innerText = "* Tiene que ser un email válido"
            $('email').classList.add('input-error')
        }else{
            $('email-error').innerText = null
            $('email').classList.remove('input-error')
        }
    })

    $('email').addEventListener('keydown', () => {
        $('email-error').innerText = null
        $('email').classList.remove('input-error')
    })

    $('message').addEventListener('blur', () => {
        if(!$('message').value.trim()){
            $('message-error').innerText = "* El mensaje es obligatorio"
            $('message').classList.add('input-error')
        }else if($('message').value.length <10){
            $('message-error').innerText = '*El mensaje debe tener como mínimo 10 caracteres'
            $('message').classList.add('input-error')
        }else{
            $('message-error').innerText = null
            $('message').classList.remove('input-error')
        }
    })

    $('form-contact').addEventListener('submit', event => {
        event.preventDefault();

        let elementsForm = $('form-contact').elements;
        
        let error = false;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            
            if(!elementsForm[i].value){
                elementsForm[i].classList.add('input-error')
                error = true
            }
        }

        for (let i = 0; i < elementsForm.length - 1; i++) {
            
            if(elementsForm[i].classList.contains('input-error')){
                error = true
            }
        }

        console.log(elementsForm[0].value)

        if(!elementsForm[0].value){
            $('name-error').innerText = "* El nombre es obligatorio"
        }
        if(!elementsForm[1].value){
            $('phone-error').innerText = "* El telefono es obligatorio"
        }
        if(!elementsForm[2].value){
            $('email-error').innerText = "* El email es obligatorio"
        }
        if(!elementsForm[3].value){
            $('message-error').innerText = "* El mensaje es obligatorio"
        }
       

        if(!error){
            $('form-contact').submit()
            Swal.fire(
                'Muchas gracias por contactarnos!',
                'Techcel',
                'success'
              )
        }
    })





})