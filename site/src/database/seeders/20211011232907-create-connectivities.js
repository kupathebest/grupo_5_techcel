'use strict';

const products = require('../../data/celulares.json')
const connectivities = []

products.forEach(celular => {
  let item = {
    wifi: celular.wifi,
    bluetooth: celular.bluetooth,
    gps: celular.gps,
    usb: celular.usb,
    nfc: celular.nfc,
    infrared: celular.infrarrojo,
    createdAt: new Date,
    updatedAt : new Date
  }
  connectivities.push(item)
});

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Connectivities', connectivities , {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Connectivities', null, {});

  }
};
