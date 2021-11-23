const $ = id => document.getElementById(id);
let regSoloNum = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;

window.addEventListener('load', () => {
    if(!$('shortName').value.trim()){
        $('shortName-span').innerText = 'Este campo es obligatorio.';
        $('shortName').classList.add('error');
    }
    $('shortName').addEventListener('blur', () => {
        switch (true) {
            case !$('shortName').value.trim():
                $('shortName-span').innerText = 'Este campo es obligatorio.';
                $('shortName').classList.add('error');
                break;
            case $('shortName').value.trim().length < 2 || $('shortName').value.trim().length > 150:
                $('shortName-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('shortName').classList.add('error');
                break;
            default:
                $('shortName').innerText = null;
                $('shortName').classList.remove('error');
        }
        $('shortName').addEventListener('keydown', () => {
            $('shortName-span').innerText = null;
            $('shortName').classList.remove('error');
        })
    })
    /************************************************************************/

    if(!$('brand').value.trim()){
        $('brand-span').innerText = 'Este campo es obligatorio.';
        $('brand').classList.add('error');
        }

    $('brand').addEventListener('blur', () => {
        switch (true) {
            case !$('brand').value.trim():
                $('brand-span').innerText = 'Este campo es obligatorio.';
                $('brand').classList.add('error');
                break;
            case $('brand').value.trim().length < 2 || $('brand').value.trim().length > 150:
                $('brand-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('brand').classList.add('error');
                break;
            default:
                $('brand').innerText = null;
                $('brand').classList.remove('error');
        }
        $('brand').addEventListener('keydown', () => {
            $('brand-span').innerText = null;
            $('brand').classList.remove('error');
        })
    })

    if(!$('price').value.trim()){
        $('price-span').innerText = 'Este campo es obligatorio.';
        $('price').classList.add('error');
        }

    $('price').addEventListener('blur',() =>{
        if(!regSoloNum.test($('price').value)){
            $('price-span').innerText = 'Solo puede contener números.';
            $('price').classList.add('error')
        }else{
            $('price-span').innerText = null;
            $('price').classList.remove('error');
        }
    })

    /************************************************************************/
    /************************************************************************/
    /************************************************************************/
    if(!$('category').value.trim()){
    $('category-span').innerText = 'Este campo es obligatorio.';
    $('category').classList.add('error');
    }
    $('category').addEventListener('blur', () => {
        switch (true) {
            case !$('category').value.trim():
                $('category-span').innerText = 'Este campo es obligatorio.';
                $('category').classList.add('error');
                break;
            default:
                $('category-span').innerText = null;
                $('category').classList.remove('error');
        }
    })

    if(!$('colour').value.trim()){
    $('colour-span').innerText = 'Este campo es obligatorio.';
    $('colour').classList.add('error');
    }

    $('colour').addEventListener('blur', () => {
        switch (true) {
            case !$('colour').value.trim():
                $('colour-span').innerText = 'Este campo es obligatorio.';
                $('colour').classList.add('error');
                break;
            default:
                $('colour-span').innerText = null;
                $('colour').classList.remove('error');
        }
    })


    /************************************************************************/
    /************************************************************************/
    /************************************************************************/
    if(!$('displayP').value.trim()){
    $('displayP-span').innerText = 'Este campo es obligatorio.';
    $('displayP').classList.add('error');
    }
    
    $('displayP').addEventListener('blur', () => {
        switch (true) {
            case !$('displayP').value.trim():
                $('displayP-span').innerText = 'Este campo es obligatorio.';
                $('displayP').classList.add('error');
                break;
            case $('displayP').value.trim().length < 2 || $('displayP').value.trim().length > 150:
                $('displayP-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('displayP').classList.add('error');
                break;
            default:
                $('displayP').innerText = null;
                $('displayP').classList.remove('error');
        }
        $('displayP').addEventListener('keydown', () => {
            $('displayP-span').innerText = null;
            $('displayP').classList.remove('error');
        })
    })
    /************************************************************************/
    if(!$('processorP').value.trim()){
    $('processorP-span').innerText = 'Este campo es obligatorio.';
    $('processorP').classList.add('error');
    }

    $('processorP').addEventListener('blur', () => {
        switch (true) {
            case !$('processorP').value.trim():
                $('processorP-span').innerText = 'Este campo es obligatorio.';
                $('processorP').classList.add('error');
                break;
            case $('processorP').value.trim().length < 2 || $('processorP').value.trim().length > 150:
                $('processorP-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('processorP').classList.add('error');
                break;
            default:
                $('processorP').innerText = null;
                $('processorP').classList.remove('error');
        }
        $('processorP').addEventListener('keydown', () => {
            $('processorP-span').innerText = null;
            $('processorP').classList.remove('error');
        })
    })
    /************************************************************************/
    if(!$('memoryP').value.trim()){
    $('memoryP-span').innerText = 'Este campo es obligatorio.';
    $('memoryP').classList.add('error');
    }
    $('memoryP').addEventListener('blur', () => {
        switch (true) {
            case !$('memoryP').value.trim():
                $('memoryP-span').innerText = 'Este campo es obligatorio.';
                $('memoryP').classList.add('error');
                break;
            case $('memoryP').value.trim().length < 2 || $('memoryP').value.trim().length > 150:
                $('memoryP-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('memoryP').classList.add('error');
                break;
            default:
                $('memoryP').innerText = null;
                $('memoryP').classList.remove('error');
        }
        $('memoryP').addEventListener('keydown', () => {
            $('memoryP-span').innerText = null;
            $('memoryP').classList.remove('error');
        })
    })
    /************************************************************************/
    if(!$('storageP').value.trim()){
    $('storageP-span').innerText = 'Este campo es obligatorio.';
    $('storageP').classList.add('error');
    }

    $('storageP').addEventListener('blur', () => {
        switch (true) {
            case !$('storageP').value.trim():
                $('storageP-span').innerText = 'Este campo es obligatorio.';
                $('storageP').classList.add('error');
                break;
            case $('storageP').value.trim().length < 2 || $('storageP').value.trim().length > 150:
                $('storageP-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('storageP').classList.add('error');
                break;
            default:
                $('storageP').innerText = null;
                $('storageP').classList.remove('error');
        }
        $('storageP').addEventListener('keydown', () => {
            $('storageP-span').innerText = null;
            $('storageP').classList.remove('error');
        })
    })

    /************************************************************************/
    if(!$('expansionP').value.trim()){
    $('expansionP-span').innerText = 'Este campo es obligatorio.';
    $('expansionP').classList.add('error');
    }

    $('expansionP').addEventListener('blur', () => {
        switch (true) {
            case !$('expansionP').value.trim():
                $('expansionP-span').innerText = 'Este campo es obligatorio.';
                $('expansionP').classList.add('error');
                break;
            case $('expansionP').value.trim().length < 2 || $('expansionP').value.trim().length > 150:
                $('expansionP-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('expansionP').classList.add('error');
                break;
            default:
                $('expansionP').innerText = null;
                $('expansionP').classList.remove('error');
        }
        $('expansionP').addEventListener('keydown', () => {
            $('expansionP-span').innerText = null;
            $('expansionP').classList.remove('error');
        })
    })
    /************************************************************************/
    if(!$('cameraP').value.trim()){
    $('cameraP-span').innerText = 'Este campo es obligatorio.';
    $('cameraP').classList.add('error');
    }

    $('cameraP').addEventListener('blur', () => {
        switch (true) {
            case !$('cameraP').value.trim():
                $('cameraP-span').innerText = 'Este campo es obligatorio.';
                $('cameraP').classList.add('error');
                break;
            case $('cameraP').value.trim().length < 2 || $('cameraP').value.trim().length > 150:
                $('cameraP-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('cameraP').classList.add('error');
                break;
            default:
                $('cameraP').innerText = null;
                $('cameraP').classList.remove('error');
        }
        $('cameraP').addEventListener('keydown', () => {
            $('cameraP-span').innerText = null;
            $('cameraP').classList.remove('error');
        })
    })
    /************************************************************************/
    if(!$('batteryP').value.trim()){
    $('batteryP-span').innerText = 'Este campo es obligatorio.';
    $('batteryP').classList.add('error');
    }
    $('batteryP').addEventListener('blur', () => {
        switch (true) {
            case !$('batteryP').value.trim():
                $('batteryP-span').innerText = 'Este campo es obligatorio.';
                $('batteryP').classList.add('error');
                break;
            case $('batteryP').value.trim().length < 2 || $('batteryP').value.trim().length > 150:
                $('batteryP-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('batteryP').classList.add('error');
                break;
            default:
                $('batteryP').innerText = null;
                $('batteryP').classList.remove('error');
        }
        $('batteryP').addEventListener('keydown', () => {
            $('batteryP-span').innerText = null;
            $('batteryP').classList.remove('error');
        })
    })

    /************************************************************************/
    if(!$('osP').value.trim()){
    $('osP-span').innerText = 'Este campo es obligatorio.';
    $('osP').classList.add('error');
    }
    $('osP').addEventListener('blur', () => {
        switch (true) {
            case !$('osP').value.trim():
                $('osP-span').innerText = 'Este campo es obligatorio.';
                $('osP').classList.add('error');
                break;
            case $('osP').value.trim().length < 2 || $('osP').value.trim().length > 150:
                $('osP-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('osP').classList.add('error');
                break;
            default:
                $('osP').innerText = null;
                $('osP').classList.remove('error');
        }
        $('osP').addEventListener('keydown', () => {
            $('osP-span').innerText = null;
            $('osP').classList.remove('error');
        })
    })
    /************************************************************************/
    if(!$('profileP').value.trim()){
    $('profileP-span').innerText = 'Este campo es obligatorio.';
    $('profileP').classList.add('error');
    }
    $('profileP').addEventListener('blur', () => {
        switch (true) {
            case !$('profileP').value.trim():
                $('profileP-span').innerText = 'Este campo es obligatorio.';
                $('profileP').classList.add('error');
                break;
            case $('profileP').value.trim().length < 2 || $('profileP').value.trim().length > 150:
                $('profileP-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('profileP').classList.add('error');
                break;
            default:
                $('profileP').innerText = null;
                $('profileP').classList.remove('error');
        }
        $('profileP').addEventListener('keydown', () => {
            $('profileP-span').innerText = null;
            $('profileP').classList.remove('error');
        })
    })
    /************************************************************************/
    if(!$('weightP').value.trim()){
    $('weightP-span').innerText = 'Este campo es obligatorio.';
    $('weightP').classList.add('error');
    }
    $('weightP').addEventListener('blur', () => {
        switch (true) {
            case !$('weightP').value.trim():
                $('weightP-span').innerText = 'Este campo es obligatorio.';
                $('weightP').classList.add('error');
                break;
            case $('weightP').value.trim().length < 2 || $('weightP').value.trim().length > 150:
                $('weightP-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('weightP').classList.add('error');
                break;
            default:
                $('weightP').innerText = null;
                $('weightP').classList.remove('error');
        }
        $('weightP').addEventListener('keydown', () => {
            $('weightP-span').innerText = null;
            $('weightP').classList.remove('error');
        })
    })
    /************************************************************************/
    /**********************************REDES**************************************/
    if(!$('twog').value.trim()){
    $('twog-span').innerText = 'Este campo es obligatorio.';
    $('twog').classList.add('error');
    }
    $('twog').addEventListener('blur', () => {
        switch (true) {
            case !$('twog').value.trim():
                $('twog-span').innerText = 'Este campo es obligatorio.';
                $('twog').classList.add('error');
                break;
            case $('twog').value.trim().length < 2 || $('twog').value.trim().length > 150:
                $('twog-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('twog').classList.add('error');
                break;
            default:
                $('twog').innerText = null;
                $('twog').classList.remove('error');
        }
        $('twog').addEventListener('keydown', () => {
            $('twog-span').innerText = null;
            $('twog').classList.remove('error');
        })
    })
    if(!$('threeg').value.trim()){
    $('threeg-span').innerText = 'Este campo es obligatorio.';
    $('threeg').classList.add('error');
    }
    $('threeg').addEventListener('blur', () => {
        switch (true) {
            case !$('threeg').value.trim():
                $('threeg-span').innerText = 'Este campo es obligatorio.';
                $('threeg').classList.add('error');
                break;
            case $('threeg').value.trim().length < 2 || $('threeg').value.trim().length > 150:
                $('threeg-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('threeg').classList.add('error');
                break;
            default:
                $('threeg').innerText = null;
                $('threeg').classList.remove('error');
        }
        $('threeg').addEventListener('keydown', () => {
            $('threeg-span').innerText = null;
            $('threeg').classList.remove('error');
        })
    })

    if(!$('fourg').value.trim()){
    $('fourg-span').innerText = 'Este campo es obligatorio.';
    $('fourg').classList.add('error');
    }

    $('fourg').addEventListener('blur', () => {
        switch (true) {
            case !$('fourg').value.trim():
                $('fourg-span').innerText = 'Este campo es obligatorio.';
                $('fourg').classList.add('error');
                break;
            case $('fourg').value.trim().length < 2 || $('fourg').value.trim().length > 150:
                $('fourg-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('fourg').classList.add('error');
                break;
            default:
                $('fourg').innerText = null;
                $('fourg').classList.remove('error');
        }
        $('fourg').addEventListener('keydown', () => {
            $('fourg-span').innerText = null;
            $('fourg').classList.remove('error');
        })
    })
    if(!$('fiveg').value.trim()){
    $('fiveg-span').innerText = 'Este campo es obligatorio.';
    $('fiveg').classList.add('error');
    }

    $('fiveg').addEventListener('blur', () => {
        switch (true) {
            case !$('fiveg').value.trim():
                $('fiveg-span').innerText = 'Este campo es obligatorio.';
                $('fiveg').classList.add('error');
                break;
            case $('fiveg').value.trim().length < 2 || $('fiveg').value.trim().length > 150:
                $('fiveg-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('fiveg').classList.add('error');
                break;
            default:
                $('fiveg').innerText = null;
                $('fiveg').classList.remove('error');
        }
        $('fiveg').addEventListener('keydown', () => {
            $('fiveg-span').innerText = null;
            $('fiveg').classList.remove('error');
        })
    })
    if(!$('bluetooth').value.trim()){
    $('bluetooth-span').innerText = 'Este campo es obligatorio.';
    $('bluetooth').classList.add('error');
    }
    $('bluetooth').addEventListener('blur', () => {
        switch (true) {
            case !$('bluetooth').value.trim():
                $('bluetooth-span').innerText = 'Este campo es obligatorio.';
                $('bluetooth').classList.add('error');
                break;
            case $('bluetooth').value.trim().length < 2 || $('bluetooth').value.trim().length > 150:
                $('bluetooth-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('bluetooth').classList.add('error');
                break;
            default:
                $('bluetooth').innerText = null;
                $('bluetooth').classList.remove('error');
        }
        $('bluetooth').addEventListener('keydown', () => {
            $('bluetooth-span').innerText = null;
            $('bluetooth').classList.remove('error');
        })
    })
    if(!$('usb').value.trim()){
    $('usb-span').innerText = 'Este campo es obligatorio.';
    $('usb').classList.add('error');
    }

    $('usb').addEventListener('blur', () => {
        switch (true) {
            case !$('usb').value.trim():
                $('usb-span').innerText = 'Este campo es obligatorio.';
                $('usb').classList.add('error');
                break;
            case $('usb').value.trim().length < 2 || $('usb').value.trim().length > 150:
                $('usb-span').innerText = 'Debe tener entre 2 y 150 cáracteres.'
                $('usb').classList.add('error');
                break;
            default:
                $('usb').innerText = null;
                $('usb').classList.remove('error');
        }
        $('usb').addEventListener('keydown', () => {
            $('usb-span').innerText = null;
            $('usb').classList.remove('error');
        })
    })

    $('formulario-edit').addEventListener('submit', event => {
        event.preventDefault();
        
        let elementosForm = $('formulario-edit').elements;
        console.log(elementosForm);

        let error = false;

        /*if(!elementosForm[39].value){
            $('error-imagen').innerText = 'No hay imagenes';
            error = true;
        }else{
            $('error-imagen').innerText = null;
                }*/

        for(let i = 0; i < elementosForm.length - 5; i++){
            if(!elementosForm[i].value && elementosForm[i].classList.contains('error')){
                $('errores').innerText = 'Faltan campos para rellenar en el formulario.';
                error = true;
            }
        }

        if(!error){
            $('formulario-edit').submit();
        }
    })

})
