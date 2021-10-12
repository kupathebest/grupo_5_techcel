'use strict';

const colores= require('../../data/colores.json')
const colours = []

colores.forEach(color => {
  let item = {
    name:color.color,
    createdAt : new Date,
    updatedAt : new Date

  }
  colours.push(item)
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('colours', colours, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('colours', null, {});
     
  }
};

