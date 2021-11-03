window.addEventListener("load" , () =>{
  let masDatos = document.getElementById("mas-datos");
    let mas = document.getElementById("mas");
    mas.addEventListener("click" , () =>{
      masDatos.classList.toggle("ver-mas")  
    })
})