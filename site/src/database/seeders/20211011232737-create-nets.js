'use strict';

const products = require('../../data/celulares.json')
const nets = []

products.forEach(celular => {
  let item = {
    twoG: celular.dosg,
    threeG: celular.tresg,
    fourG: celular.cuatrog,
    fiveG: celular.cincog,
    gprs: celular.gprs,
    sim: celular.sim,
    createdAt: new Date,
    updatedAt : new Date
  }
  nets.push(item)
});

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('nets', nets , {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('nets', null, {});

  }
};

