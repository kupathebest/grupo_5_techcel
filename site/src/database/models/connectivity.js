'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Connectivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Connectivity.hasOne(models.Product,{
        as : 'product',
        foreignKey: 'connectivityId'
      })
    }
  };
  Connectivity.init({
    wifi: DataTypes.STRING,
    bluetooth: DataTypes.STRING,
    gps: DataTypes.STRING,
    usb: DataTypes.STRING,
    nfc: DataTypes.STRING,
    infrared: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Connectivity',
  });
  return Connectivity;
};