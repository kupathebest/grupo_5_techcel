'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MainFeature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MainFeature.hasOne(models.Product,{
        as : 'product',
        foreignKey: 'mainFeatureId'
      })
    }
  };
  MainFeature.init({
    displayP: DataTypes.STRING,
    processorP: DataTypes.STRING,
    memoryP: DataTypes.STRING,
    storageP: DataTypes.STRING,
    expansionP: DataTypes.STRING,
    cameraP: DataTypes.STRING,
    batteryP: DataTypes.STRING,
    osP: DataTypes.STRING,
    profileP: DataTypes.STRING,
    weightP: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MainFeature',
  });
  return MainFeature;
};