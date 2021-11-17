const $ = id => document.getElementById(id);
let contenido = $('contenido');



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

const getAllProducts = async () => {
 let response = await fetch(window.origin + `/apis/get-all-products`);
        let products = await response.json()
       contenido.innerHTML = null;
       
        products.data.forEach( product => {
            addItem(product)
        })

}
getAllProducts()



const colorVerify = async (color) => {

    try {
        let response = await fetch(window.origin + `/apis/get-colours-filter?filter=${color}`)
        
        let result = await response.json()
        contenido.innerHTML = null

        let productosFiltrados = result.data.filter(producto => producto.colour.name.includes(color) )
        productosFiltrados.forEach(producto =>{

            addItem(producto)
        })
           

    } catch (error) {
        console.log(error)
    }
}

const categoryVerify = async (category) => {

    try {
        let response = await fetch(window.origin + `/apis/get-categories-filter?filter=${category}`)
        
        let result = await response.json()
        contenido.innerHTML = null

        let productosFiltrados = result.data.filter(producto => producto.category.name.includes(category) )
        productosFiltrados.forEach(producto =>{

            addItem(producto)
        })
           

    } catch (error) {
        console.log(error)
    }
}

const brandVerify = async (brand) => {

    try {
        let response = await fetch(window.origin + `/apis/get-brand-filter?filter=${brand}`)
        
        let result = await response.json()
        contenido.innerHTML = null
        console.log(result)
       /* let productosFiltrados = result.data.filter(producto => producto.brand.includes(brand))*/
       result.data.forEach(producto =>{

            addItem(producto)
        })
        
    } catch (error) {
        console.log(error)
    }

}


    $("negro").addEventListener("change", ()=> {        
        colorVerify("negro")
    });
    $("plateado").addEventListener("change", ()=> {        
        colorVerify("plateado")
    });
    $("blanco").addEventListener("change", ()=> {        
        colorVerify("blanco")
    });
    $("azul").addEventListener("change", ()=> {        
        colorVerify("azul")
    });
    $("rosa").addEventListener("change", ()=> {        
        colorVerify("rosa")
    });
    $("celeste").addEventListener("change", ()=> {        
        colorVerify("celeste")
    });
    $("purpura").addEventListener("change", ()=> {        
        colorVerify("purpura")
    });
    $("rojo").addEventListener("change", ()=> {        
        colorVerify("rojo")
    });
    $("dorado").addEventListener("change", ()=> {        
        colorVerify("dorado")
    });
    
    $('novedades').addEventListener('change', ()=> {
        categoryVerify('novedades')
    });

    $('ofertas').addEventListener('change', ()=> {
        categoryVerify('ofertas')
    });

    $("los mas comprados").addEventListener('change', ()=> {
       categoryVerify("los mas comprados")
    });

    $("motorola").addEventListener('change', ()=> {
        brandVerify("motorola")
     });
     $("samsung").addEventListener('change', ()=> {
        brandVerify("samsung")
     });
     $("xiaomi").addEventListener('change', ()=> {
        brandVerify("xiaomi")
     });

    $("iphone").addEventListener('change', ()=> {
        brandVerify("iphone")
     });
     $("lg").addEventListener('change', ()=> {
        brandVerify("lg")
     });


   

    
      
    


       /* const brandVerify = async (marca) => {

            try {
                let response = await fetch(window.origin + '/apis/get-products-filter');
                let result = await response.json()
        
                return result.data.filter(producto => producto.brand.includes(marca) )
            
            } catch (error) {
               console.log(error)

            }
        }
        
            $("xiaomi").addEventListener("change",()=> {
                console.log(brandVerify("xiaomi"))
            });
          
            const priceVerify = async (price) => {

                try {
                    let response = await fetch(window.origin + '/apis/get-products-filter');
                    let result = await response.json()
            
                    return result.data.filter(producto => producto.price.includes(price) )
                
                } catch (error) {
                    console.log(error)
                }
            }
            
                $("$40202 o más").addEventListener("change",()=> {
                    console.log(priceVerify(47000))
                });*/




                


               /* const getProducts = async () =>{
                    let response = await fetch(window.origin + '/apis/get-products');
                    let products = await response.json()
                      console.log (products)

                    table.innerHTML = null

                    products.data.forEach(product => {
                        addItem(product)
                   })

                }

                getProducts(0)
              
window.addEventListener('load', () => {
     ProductsFilter()
})

table.innerHTML += item;

filter.addEventListener('change', e => {
    getProductsFilter(e.target.value)
})*/
    
            
        
       
    


    
