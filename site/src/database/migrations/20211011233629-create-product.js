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
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Categories",
          },
          key : "id"
        }
           
      },
      mainFeatureId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "MainFeatures",
          },
          key : "id"
        }
      },
      displayId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Displays",
          },
          key : "id"
        }
      },
      cameraId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Cameras",
          },
          key : "id"
        }
      },
      netId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Nets",
          },
          key : "id"
        }
      },
      connectivityId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Connectivities",
          },
          key : "id"
        }
      },
      batteryId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : "Batteries",
          },
          key : "id"
        }
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