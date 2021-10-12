'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MainFeatures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayP: {
        type: Sequelize.STRING
      },
      processorP: {
        type: Sequelize.STRING
      },
      memoryP: {
        type: Sequelize.STRING
      },
      storageP: {
        type: Sequelize.STRING
      },
      expansionP: {
        type: Sequelize.STRING
      },
      cameraP: {
        type: Sequelize.STRING
      },
      batteryP: {
        type: Sequelize.STRING
      },
      osP: {
        type: Sequelize.STRING
      },
      profileP: {
        type: Sequelize.STRING
      },
      weightP: {
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
    await queryInterface.dropTable('MainFeatures');
  }
};