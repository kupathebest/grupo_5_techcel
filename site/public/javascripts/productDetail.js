window.addEventListener("load" , () =>{
  let masDatos = document.getElementById("mas-datos");
  let mas = document.getElementById("mas");
  let estado = 'ver'
  mas.innerHTML = 'ver más <i class="fas fa-chevron-down"></i>'
    mas.addEventListener("click" , () =>{
      masDatos.classList.toggle("ver-mas")
      mas.innerHTML = null
      mas.innerHTML = 'ver menos <i class="fas fa-chevron-down"></i>'
      
      if(estado === 'ver'){
        mas.addEventListener('click',()=>{
          mas.innerHTML = null
          mas.innerHTML = 'ver más <i class="fas fa-chevron-down"></i>'
        })
        estado = 'no ver'
      }
      else if(estado === 'no ver'){
        mas.addEventListener('click',()=>{
          mas.innerHTML = null
          mas.innerHTML = 'ver menos <i class="fas fa-chevron-up"></i>'
        })
          estado = 'ver'      
      }
    })
})


//                            <img src="/images/equipos/<%= photo.file %>" alt="" onclick="document.getElementById('imgMain').style('background-image: url('/images/equipos/<%=photo.file%>')'> 
/* <div class="miniaturas">
                       
<% celular.images.forEach(photo => { %>
                            
  <div style='height: 20px; background-image: url("/images/equipos/<%=photo.file%>")'> </div>
<% }) %>


</div>/

<img src="/images/equipos/<%= photo.file %>" alt="" onclick='document.getElementById('imgMain').style(background-image: url("/images/equipos/<%=photo.file%>")'> 


onclick='document.getElementById('imgMain').style.backgroundImage = 'url("/images/equipos/<%=photo.file%>")




style='background:no-repeat; max-height: 500px; background-image: url("/images/equipos/<%= celular.images[0].file %>") '*/