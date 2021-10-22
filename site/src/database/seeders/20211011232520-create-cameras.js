'use strict';

const products = require('../../data/celulares.json')
const cameras = []

products.forEach(celular => {
  let item = {
    mainCamera: celular.camaraPrincipal,
    frontCamera: celular.camaraFrontal,
    videoCamera: celular.camaraVideo,
    createdAt: new Date,
    updatedAt : new Date
  }
  cameras.push(item)
});

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('cameras', cameras , {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('cameras', null, {});

  }
};