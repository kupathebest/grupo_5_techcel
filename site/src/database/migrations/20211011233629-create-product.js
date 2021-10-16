'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shortName: {
        type: Sequelize.STRING
      },
      longName: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(8,2),
      },
      edge: {
        type: Sequelize.STRING
      },
      colourId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Colours",
          },
          key : "id"
        },
        onDelete  : "cascade"
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Categories",
          },
          key : "id"
        },
        onDelete  : "cascade"
           
      },
      mainFeatureId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "MainFeatures",
          },
          key : "id"
        },
        onDelete  : "cascade"
      },
      displayId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Displays",
          },
          key : "id"
        },
        onDelete  : "cascade"
      },
      cameraId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Cameras",
          },
          key : "id"
        },
        onDelete  : "cascade"
      },
      netId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Nets",
          },
          key : "id"
        },
        onDelete  : "cascade"
      },
      connectivityId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Connectivities",
          },
          key : "id"
        },
        onDelete  : "cascade"
      },
      batteryId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Batteries",
          },
          key : "id"
        },
        onDelete  : "cascade"
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
    await queryInterface.dropTable('Products');
  }
};