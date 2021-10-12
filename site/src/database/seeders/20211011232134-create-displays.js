'use strict';
const display = require("../../data/display");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Displays',display,{});
    
      }
    
  },
{
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Displays',null,{});

  }
}
