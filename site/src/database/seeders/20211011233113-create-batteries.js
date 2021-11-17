'use strict';

const products = require('../../data/celulares.json')
const batteries = []

products.forEach(celular => {
  let item = {

    fastCharge: celular.cargaRapida,
    wirelessCharge: celular.cargaInalambrica,
    createdAt: new Date,
    updatedAt: new Date
  }
  batteries.push(item)
});

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Batteries', batteries, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Batteries', null, {});

  }
};

