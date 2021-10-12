'use strict';

const products = require('../../data/celulares.json')
const images = []

for (let i = 0; i <= 2; i++) {
  products.forEach(celular => {
    let image = {
        file : celular.photos[i],
        productId : celular.id,
        createdAt : new Date,
        updatedAt : new Date
    }
    images.push(image)
  }); 
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Images', images, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Images', null, {});
     
  }
};
