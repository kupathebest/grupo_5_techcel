const db = require('../../database/models');
const { Op } = require('sequelize');
const throwError = (res, error) => {
    return res.status(error.status || 500).json({
        status: error.status || 500,
        errors: error.errors
    })
}
const getUrl = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`

module.exports = {
    getFilterColour : async (req,res) => {
        console.log(req.query)
        let result;
        try {
            if(+req.query.filter !==0){
                result = await db.Product.findAll({

                    include:[{

                        association : "colour",
                        where : {
                            name: req.query.filter
                        }
                    },
                    {
                        association : "images",
                    }

                    ],

                
                    attributes : [
    
                        "id","shortName", "brand", "price"
    
                    ],
    
                   
                })
            }else{

                result = await db.Product.findAll({
                    
                        attributes : [
    
                        "id","shortName", "brand", "price"
    
                    ],
    
                    include :["category", "colour","images"]
                }
                )}

                     
            let products = result
            return res.status(200).json({
                meta: {
                    link: getUrl(req),
                    total: products.length
                },
                data: products
            })

        } catch (error) {
            console.log(error)
            throwError(res, error)

        }
    },

        getAllProducts : async (req,res) => {
            try {
               products = await db.Product.findAll({
                   include : ['images','category','colour']
               }) 
               return res.status(200).json({
                meta: {
                    link: getUrl(req),
                    total: products.length
                },
                data: products
            })


            } catch (error) {
                console.log(error)
            throwError(res, error)
                
            }

            
        },
        getFilterCategory : async (req,res) => {
            console.log(req.query)
            let result;
            try {
                if(+req.query.filter !==0){
                    result = await db.Product.findAll({
    
                        include:[{
    
                            association : "category",
                            where : {
                                name: req.query.filter
                            }
                        },
                        {
                            association : "images",
                        }
    
                        ],
    
                    
                        attributes : [
        
                            "id","shortName", "brand", "price"
        
                        ],
        
                       
                    })
                }else{
    
                    result = await db.Product.findAll({
                        
                            attributes : [
        
                            "id","shortName", "brand", "price"
        
                        ],
        
                        include :["category", "colour","images"]
                    }
                    )}
    
                         
                let products = result
                return res.status(200).json({
                    meta: {
                        link: getUrl(req),
                        total: products.length
                    },
                    data: products
                })
    
            } catch (error) {
                console.log(error)
                throwError(res, error)
    
            }
},
getFilterBrand : async (req,res) => {
    console.log(req.query)
    let result;
    try {
        if(+req.query.filter !==0){
            result = await db.Product.findAll({

                             
                    where : {
                        brand: req.query.filter
                    },
                
                
                    include :["category", "colour","images"],
                

                
            
                attributes : [

                    "id","shortName", "brand", "price"

                ],

               
            })
        }else{

            result = await db.Product.findAll({
                
                    attributes : [

                    "id","shortName", "brand", "price"

                ],

                include :["category", "colour","images"]
            }
            )}

                 
        let products = result
        return res.status(200).json({
            meta: {
                link: getUrl(req),
                total: products.length
            },
            data: products
        })

    } catch (error) {
        console.log(error)
        throwError(res, error)

    }







    /*
    try {
        let products = db.Product.findAll({
            where : {
                brand : req.query.filter
            },
            include : ["images"]
        })
        return res.status(200).json({
            meta: {
                link : getUrl(req),
                total : products.length
            },
            data: products
        })

    } catch (error) {
        console.log(error)
        throwError(res, error)

    }*/
},

}
