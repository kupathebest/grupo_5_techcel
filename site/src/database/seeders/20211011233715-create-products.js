'use strict';

const products= require('../../data/celulares.json')
const productos = []

products.forEach(celular => {
  let item = {
    shortName: celular.nombreCorto,
    longName: celular.nombreLargo,
    brand: celular.marca,
    price: celular.precio,
    edge: celular.edge,
    colourId: celular.color,
    categoryId: celular.categoria,
    mainFeatureId: celular.id,
    displayId: celular.id,
    cameraId: celular.id,
    netId: celular.id,
    connectivityId: celular.id,
    batteryId: celular.id,
    

    createdAt : new Date,
    updatedAt : new Date

  }
  productos.push(item)
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('products', productos, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('products', null, {});
     
  }
};
