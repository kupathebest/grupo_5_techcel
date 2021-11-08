console.log('filtro')

const $ = id => document.getElementById(id);

const colorVerify = async (color) => {

    try {
        let response = await fetch(window.origin + '/apis/get-products-filter');
        let result = await response.json()

        return result.data.filter(producto => producto.colour.name.includes(color) )
    
    } catch (error) {
        console.log(error)
    }
}

    $("azul").addEventListener("change",()=> {
        console.log(colorVerify("azul"))
    });
    


    const categoryVerify = async (categoria) => {

        try {
            let response = await fetch(window.origin + '/apis/get-products-filter');
            let result = await response.json()
    
            return result.data.filter(producto => producto.category.name.includes(categoria) )
        
        } catch (error) {
            console.log(error)
        }
    }
    
        $("novedades").addEventListener("change",()=> {
            console.log(categoryVerify("novedades"))
        });



        const brandVerify = async (marca) => {

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
                });
              
    
    


    
