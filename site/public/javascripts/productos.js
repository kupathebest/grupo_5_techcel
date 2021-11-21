const $ = id => document.getElementById(id);
let contenido = $('contenido');
let brand = $('select-brand')
let colour = $('select-colour')
let category = $('select-category')
let price = $('select-price')
let filterButton = $('filterButton')
let filterContent = $('filterContent')

const addItem = celular => {
    let item = `
    <article>                    
        <a href="/productos/detail/${celular.id}">
                            <img src="/images/equipos/${celular.images[0].file}" alt="">
                            <p class="">${celular.shortName}</p>
                            <span>$ ${celular.price}</span>
                        </a>
                        </article>
    `
    contenido.innerHTML += item;
}

const getProducts = async (price,brand,colour,category) => {
    let response = await fetch(window.origin + `/apis/get-products?brand=${brand}&colour=${colour}&category=${category}&price=${price}`);
    let products = await response.json()
    contenido.innerHTML = null;
    console.log(products.meta.total)
    
    if(products.meta.total > 0){
        products.data.forEach(product => {
            addItem(product)
        })
    }else{
        console.log("el array esta vacio")
        contenido.innerHTML += `                    
            <div class="sin-coincidencias">
                <h1>Los filtros solicitados no coinciden con ningun producto</h1>
                <img src="/images/celular_llorando.png" width="300px" alt="">  
            </div>     
        `
    }
}
getProducts(0,"","","")

brand.addEventListener('change', e =>{
    getProducts(price.value, e.target.value, colour.value, category.value)
})
price.addEventListener('change', e =>{
    getProducts(e.target.value, brand.value, colour.value, category.value)
})
category.addEventListener('change', e =>{
    getProducts(price.value, brand.value, colour.value, e.target.value)
})
colour.addEventListener('change', e =>{
    getProducts(price.value, brand.value, e.target.value, category.value)
})

filterButton.addEventListener('click', e =>{
    e.preventDefault();
    filterContent.classList.toggle('ocultar')
})