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
    getProducts: async (req, res) => {
        let products;
        try {
            if (req.query.brand && req.query.category && req.query.colour && +req.query.price !==0) {
                switch (+req.query.price) {
                    case 1:
                        products = await db.Product.findAll({
                            where: {
                                brand: req.query.brand,
                                price: {
                                    [Op.lt]: 50000
                                },
                            },
                            
                            include: [
                                {
                                association: "category",
                                where: {
                                    name: req.query.category
                                }
                            },
                            {
                                association: "colour",
                                where: {
                                    name: req.query.colour
                                }
                            },
                            {
                                association: "images"
                            }],
                            
                        })
                        break;
                        case 2:
                            products = await db.Product.findAll({
                                where: {
                                    brand: req.query.brand,
                                    price: {
                                        [Op.between]: [50000, 100000]
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category",
                                    where: {
                                        name: req.query.category
                                    }
                                },
                                {
                                    association: "colour",
                                    where: {
                                        name: req.query.colour
                                    }
                                },
                                {
                                    association: "images"
                                }],
                                order : req.query.order
                            })
                            break;
                            case 3:
                                products = await db.Product.findAll({
                                    where: {
                                        brand: req.query.brand,
                                        price: {
                                            [Op.between]: [100000, 200000]
                                        },
                                    },
                                    
                                    include: [
                                        {
                                        association: "category",
                                        where: {
                                            name: req.query.category
                                        }
                                    },
                                    {
                                        association: "colour",
                                        where: {
                                            name: req.query.colour
                                        }
                                    },
                                    {
                                        association: "images"
                                    }],
                                    
                                })
                                break;
                            case 4:
                                products = await db.Product.findAll({
                                    where: {
                                        brand: req.query.brand,
                                        price: {
                                            [Op.gt]: 200000
                                        },
                                    },
                                    
                                    include: [
                                        {
                                        association: "category",
                                        where: {
                                            name: req.query.category
                                        }
                                    },
                                    {
                                        association: "colour",
                                        where: {
                                            name: req.query.colour
                                        }},
                                    {
                                        association: "images"
                                    }],
                                    
                                })
                                break;
                    default:
                        break;
                }
                      
        }else if(req.query.brand && req.query.category && +req.query.price !==0){
            switch (+req.query.price) {
                case 1:
                    products = await db.Product.findAll({
                        where: {
                            brand: req.query.brand,
                            price: {
                                [Op.lt]: 50000
                            },
                        },
                        include: [
                            {
                            association: "category",
                            where: {
                                name: req.query.category
                            }
                        },
                        {
                            association: "colour",
                        },
                        {
                            association: "images"
                        }],
                        
                    })
                    break;
                    case 2:
                        products = await db.Product.findAll({
                            where: {
                                brand: req.query.brand,
                                price: {
                                    [Op.between]: [50000, 100000]
                                },
                            },
                            
                            include: [
                                {
                                association: "category",
                                where: {
                                    name: req.query.category
                                }
                            },
                            {
                                association: "colour",
                            },
                            {
                                association: "images"
                            }],
                            
                        })
                        break;
                        case 3:
                            products = await db.Product.findAll({
                                where: {
                                    brand: req.query.brand,
                                    price: {
                                        [Op.between]: [100000, 200000]
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category",
                                    where: {
                                        name: req.query.category
                                    }
                                },
                                {
                                    association: "colour",
                                },
                                {
                                    association: "images"
                                }],
                                
                            })
                            break;
                        case 4:
                            products = await db.Product.findAll({
                                where: {
                                    brand: req.query.brand,
                                    price: {
                                        [Op.gt]: 200000
                                    },
                                },
                               
                                include: [
                                    {
                                    association: "category",
                                    where: {
                                        name: req.query.category
                                    }
                                },
                                {
                                    association: "colour",
                                },
                                {
                                    association: "images"
                                }],
                                
            
                            })
                            break;
                default:
                    break;
            }
        }else if(req.query.brand && req.query.colour && +req.query.price !==0){
            switch (+req.query.price) {
                case 1:
                    products = await db.Product.findAll({
                        where: {
                            brand: req.query.brand,
                            price: {
                                [Op.lt]: 50000
                            },
                        },
                        
                        include: [
                            {
                            association: "category",
                        },
                        {
                            association: "colour",
                            where: {
                                name: req.query.colour
                            }
                        },
                        {
                            association: "images"
                        }],
                        
                    })
                    break;
                    case 2:
                        products = await db.Product.findAll({
                            where: {
                                brand: req.query.brand,
                                price: {
                                    [Op.between]: [50000, 100000]
                                },
                            },
                            
                            include: [
                                {
                                association: "category",
                            },
                            {
                                association: "colour",
                                where: {
                                    name: req.query.colour
                                }
                            },
                            {
                                association: "images"
                            }],
                            
                        })
                        break;
                        case 3:
                            products = await db.Product.findAll({
                                where: {
                                    brand: req.query.brand,
                                    price: {
                                        [Op.between]: [100000, 200000]
                                    },
                                },
                               
                                include: [
                                    {
                                    association: "category",
                                },
                                {
                                    association: "colour",
                                    where: {
                                        name: req.query.colour
                                    }
                                },
                                {
                                    association: "images"
                                }],
                                
                            })
                            break;
                        case 4:
                            products = await db.Product.findAll({
                                where: {
                                    brand: req.query.brand,
                                    price: {
                                        [Op.gt]: 200000
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category",
                                },
                                {
                                    association: "colour",
                                    where: {
                                        name: req.query.colour
                                    }},
                                {
                                    association: "images"
                                }],
                                
                            })
                            break;
                default:
                    break;
            }
        }else if(req.query.category && req.query.colour && +req.query.price !==0){
            switch (+req.query.price) {
                case 1:
                    products = await db.Product.findAll({
                        where: {
                            price: {
                                [Op.lt]: 50000
                            },
                        },
                        
                        include: [
                            {
                            association: "category",
                            where: {
                                name: req.query.category
                            }
                        },
                        {
                            association: "colour",
                            where: {
                                name: req.query.colour
                            }
                        },
                        {
                            association: "images"
                        }],
                        
                    })
                    break;
                    case 2:
                        products = await db.Product.findAll({
                            where: {
                                price: {
                                    [Op.between]: [50000, 100000]
                                },
                            },
                            
                            include: [
                                {
                                association: "category",
                                where: {
                                    name: req.query.category
                                }
                            },
                            {
                                association: "colour",
                                where: {
                                    name: req.query.colour
                                }
                            },
                            {
                                association: "images"
                            }],
                            
                        })
                        break;
                        case 3:
                            products = await db.Product.findAll({
                                where: {
                                    price: {
                                        [Op.between]: [100000, 200000]
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category",
                                    where: {
                                        name: req.query.category
                                    }
                                },
                                {
                                    association: "colour",
                                    where: {
                                        name: req.query.colour
                                    }
                                },
                                {
                                    association: "images"
                                }],
                                
                            })
                            break;
                        case 4:
                            products = await db.Product.findAll({
                                where: {
                                    price: {
                                        [Op.gt]: 200000
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category",
                                    where: {
                                        name: req.query.category
                                    }
                                },
                                {
                                    association: "colour",
                                    where: {
                                        name: req.query.colour
                                    }},
                                {
                                    association: "images"
                                }],
                                
                            })
                            break;
                default:
                    break;
            }
        }else if(req.query.brand && req.query.category && req.query.colour){
            products = await db.Product.findAll({
                where: {
                    brand: req.query.brand,
                },
                
                include: [
                    {
                    association: "category",
                    where: {
                        name: req.query.category
                    }
                },
                {
                    association: "colour",
                    where: {
                        name: req.query.colour
                    }
                },
                {
                    association: "images"
                }],
                
            })
        }else if(req.query.brand && req.query.category){
            products = await db.Product.findAll({
                where: {
                    brand: req.query.brand,
                },
                
                include: [
                    {
                    association: "category",
                    where: {
                        name: req.query.category
                    }
                },
                {
                    association: "colour",
                },
                {
                    association: "images"
                }],
                
            })
        }else if(req.query.brand && req.query.colour){
            products = await db.Product.findAll({
                where: {
                    brand: req.query.brand,
                },
                
                include: [
                    {
                    association: "category",
                },
                {
                    association: "colour",
                    where: {
                        name: req.query.colour
                    }
                },
                {
                    association: "images"
                }],
                
            })
        }else if(req.query.brand && +req.query.price !==0){
            switch (+req.query.price) {
                case 1:
                    products = await db.Product.findAll({
                        where: {
                            brand: req.query.brand,
                            price: {
                                [Op.lt]: 50000
                            },
                        },
                        
                        include: [
                            {
                            association: "category",
                        },
                        {
                            association: "colour",
                        },
                        {
                            association: "images"
                        }],
                        
                    })
                    break;
                    case 2:
                        products = await db.Product.findAll({
                            where: {
                                brand: req.query.brand,
                                price: {
                                    [Op.between]: [50000, 100000]
                                },
                            },
                            
                            include: [
                                {
                                association: "category",
                            },
                            {
                                association: "colour",
                            },
                            {
                                association: "images"
                            }],
                            
                        })
                        break;
                        case 3:
                            products = await db.Product.findAll({
                                where: {
                                    brand: req.query.brand,
                                    price: {
                                        [Op.between]: [100000, 200000]
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category"
                                },
                                {
                                    association: "colour",
                                    where: {
                                        name: req.query.colour
                                    }
                                },
                                {
                                    association: "images"
                                }],
                                
                            })
                            break;
                        case 4:
                            products = await db.Product.findAll({
                                where: {
                                    brand: req.query.brand,
                                    price: {
                                        [Op.gt]: 200000
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category"
                                },
                                {
                                    association: "colour",
                                    where: {
                                        name: req.query.colour
                                    }},
                                {
                                    association: "images"
                                }],
                                            
                            })
                            break;
                default:
                    break;
            }
        }else if(req.query.category && req.query.colour){
            products = await db.Product.findAll({
                
                include: [
                    {
                    association: "category",
                    where: {
                        name: req.query.category
                    }
                },
                {
                    association: "colour",
                    where: {
                        name: req.query.colour
                    }
                },
                {
                    association: "images"
                }],
                
            })
        }else if(req.query.category && +req.query.price !==0){
            switch (+req.query.price) {
                case 1:
                    products = await db.Product.findAll({
                        where: {
                            price: {
                                [Op.lt]: 50000
                            },
                        },
                        
                        include: [
                            {
                            association: "category",
                            where: {
                                name: req.query.category
                            }
                        },
                        {
                            association: "colour"
                        },
                        {
                            association: "images"
                        }],
                        
                    })
                    break;
                    case 2:
                        products = await db.Product.findAll({
                            where: {
                                price: {
                                    [Op.between]: [50000, 100000]
                                },
                            },
                            
                            include: [
                                {
                                association: "category",
                                where: {
                                    name: req.query.category
                                }
                            },
                            {
                                association: "colour"
                            },
                            {
                                association: "images"
                            }],
                            
                        })
                        break;
                        case 3:
                            products = await db.Product.findAll({
                                where: {
                                    price: {
                                        [Op.between]: [100000, 200000]
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category",
                                    where: {
                                        name: req.query.category
                                    }
                                },
                                {
                                    association: "colour",
                                },
                                {
                                    association: "images"
                                }],
                                
                            })
                            break;
                        case 4:
                            products = await db.Product.findAll({
                                where: {
                                    price: {
                                        [Op.gt]: 200000
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category",
                                    where: {
                                        name: req.query.category
                                    }
                                },
                                {
                                    association: "colour",
                                },
                                {
                                    association: "images"
                                }],
                                
            
                            })
                            break;
                default:
                    break;
            }
        }else if(req.query.colour && +req.query.price !==0){
            switch (+req.query.price) {
                case 1:
                    products = await db.Product.findAll({
                        where: {
                            price: {
                                [Op.lt]: 50000
                            },
                        },
                        
                        include: [
                            {
                            association: "category",
                        },
                        {
                            association: "colour",
                            where: {
                                name: req.query.colour
                            }
                        },
                        {
                            association: "images"
                        }],
                        
                    })
                    break;
                    case 2:
                        products = await db.Product.findAll({
                            where: {
                                price: {
                                    [Op.between]: [50000, 100000]
                                },
                            },
                            
                            include: [
                                {
                                association: "category",
                            },
                            {
                                association: "colour",
                                where: {
                                    name: req.query.colour
                                }
                            },
                            {
                                association: "images"
                            }],
                            
                        })
                        break;
                        case 3:
                            products = await db.Product.findAll({
                                where: {
                                    price: {
                                        [Op.between]: [100000, 200000]
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category",
                                },
                                {
                                    association: "colour",
                                    where: {
                                        name: req.query.colour
                                    }
                                },
                                {
                                    association: "images"
                                }],
                                
                            })
                            break;
                        case 4:
                            products = await db.Product.findAll({
                                where: {
                                    price: {
                                        [Op.gt]: 200000
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category",
                                },
                                {
                                    association: "colour",
                                    where: {
                                        name: req.query.colour
                                    }},
                                {
                                    association: "images"
                                }],
                                
                            })
                            break;
                default:
                    break;
            }
        }else if(req.query.brand){
            products = await db.Product.findAll({
                where: {
                    brand: req.query.brand,
                },
                
                include: [
                    {
                    association: "category"
                },
                {
                    association: "colour"
                },
                {
                    association: "images"
                }],
                
            })
        }else if(req.query.category){
            products = await db.Product.findAll({
                
                include: [
                    {
                    association: "category",
                    where: {
                        name: req.query.category
                    }
                },
                {
                    association: "colour"
                },
                {
                    association: "images"
                }]
            })
        }else if(req.query.colour){
            products = await db.Product.findAll({
                
                include: [
                    {
                    association: "category"
                },
                {
                    association: "colour",
                    where: {
                        name: req.query.colour
                    }
                },
                {
                    association: "images"
                }]
            })
        }else if(+req.query.price !==0){
            switch (+req.query.price) {
                case 1:
                    products = await db.Product.findAll({
                        where: {
                            price: {
                                [Op.lt]: 50000
                            },
                        },
                        
                        include: [
                            {
                            association: "category"
                        },
                        {
                            association: "colour"
                        },
                        {
                            association: "images"
                        }]
                    })
                    break;
                    case 2:
                        products = await db.Product.findAll({
                            where: {
                                price: {
                                    [Op.between]: [50000, 100000]
                                },
                            },
                            
                            include: [
                                {
                                association: "category"
                            },
                            {
                                association: "colour"
                            },
                            {
                                association: "images"
                            }]
                        })
                        break;
                        case 3:
                            products = await db.Product.findAll({
                                where: {
                                    price: {
                                        [Op.between]: [100000, 200000]
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category"
                                },
                                {
                                    association: "colour"
                                },
                                {
                                    association: "images"
                                }]
                            })
                            break;
                        case 4:
                            products = await db.Product.findAll({
                                where: {
                                    price: {
                                        [Op.gt]: 200000
                                    },
                                },
                                
                                include: [
                                    {
                                    association: "category"
                                },
                                {
                                    association: "colour"
                                },
                                {
                                    association: "images"
                                }]
            
                            })
                            break;
                default:
                    break;
            }
        }else{
            products = await db.Product.findAll({
                
                include: [
                    {
                    association: "category"
                },
                {
                    association: "colour"
                },
                {
                    association: "images"
                }]
            })
        }
            let response = {
                status: 200,
                meta: {
                    total: products.length,
                    link: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                },
                data: products
            }
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json({ response: error })
    }
}

}
