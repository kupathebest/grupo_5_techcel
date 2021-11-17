let search = document.getElementById("search")
let inputSearch = document.getElementById("input-search")
search.addEventListener("submit", e =>{
    e.preventDefault()
    console.log(inputSearch.value)
   if(inputSearch.value ){
        search.submit()
    }  
})