'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Connectivities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wifi: {
        type: Sequelize.STRING,
      },
      bluetooth: {
        type: Sequelize.STRING
      },
      gps: {
        type: Sequelize.STRING
      },
      usb: {
        type: Sequelize.STRING
      },
      nfc: {
        type: Sequelize.STRING
      },
      infrared: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Connectivities');
  }
};