'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Nets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      twog: {
        type: Sequelize.STRING
      },
      threeg: {
        type: Sequelize.STRING
      },
      fourg: {
        type: Sequelize.STRING
      },
      fiveg: {
        type: Sequelize.STRING
      },
      gprs: {
        type: Sequelize.STRING
      },
      sim: {
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
    await queryInterface.dropTable('Nets');
  }
};