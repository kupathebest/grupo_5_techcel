'use strict';

const products = require('../../data/celulares.json')
const mainFeatures = []

products.forEach(celular => {
  let item = {
    displayP: celular.pantallaP,
    processorP: celular.procesadorP,
    memoryP: celular.memoriaP,
    storageP: celular.almacenamientoP,
    expansionP: celular.expansionP,
    cameraP: celular.camaraP,
    batteryP: celular.bateriaP,
    profileP: celular.perfilP,
    osP: celular.osP,
    weightP: celular.pesoP,
    createdAt: new Date,
    updatedAt: new Date
  }
  mainFeatures.push(item)
});



module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Mainfeatures', mainFeatures, {});

  }

},
{
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Mainfeatures', null, {});

  }
}
