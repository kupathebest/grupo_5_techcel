'use strict';
const categories = [
  {
    name :"novedades",
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name :"los mas comprados",
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name :"ofertas",
    createdAt : new Date,
    updatedAt : new Date
  },
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('categories', categories, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('categories', null, {});
     
  }
};
