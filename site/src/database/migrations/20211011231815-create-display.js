'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Displays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayType: {
        type: Sequelize.STRING
      },
      displaySize: {
        type: Sequelize.STRING
      },
      displayResolution: {
        type: Sequelize.STRING
      },
      density: {
        type: Sequelize.STRING
      },
      protection: {
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
    await queryInterface.dropTable('Displays');
  }
};