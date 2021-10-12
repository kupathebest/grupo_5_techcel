'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Display extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Display.hasOne(models.Product,{
        as : 'product',
        foreignKey: 'displayId'
      })
    }
  };
  Display.init({
    displayType: DataTypes.STRING,
    displaySize: DataTypes.STRING,
    displayResolution: DataTypes.STRING,
    density: DataTypes.STRING,
    protection: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Display',
  });
  return Display;
};