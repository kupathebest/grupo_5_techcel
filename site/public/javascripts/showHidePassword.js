var eye = document.getElementById('Eye');

var password = document.getElementById('password');

eye.addEventListener("click", function(){

    if(password.type == "password"){
        password.type = "text"
        eye.style.opacity = 0.8

    }else{

        password.type = "password"
        eye.style.opacity = 0.2

    }
    
})