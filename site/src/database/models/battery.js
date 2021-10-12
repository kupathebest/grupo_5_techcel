'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Battery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Battery.hasOne(models.Product,{
        as : 'product',
        foreignKey: 'batteryId'
      })
    }
  };
  Battery.init({
    fastCharge: DataTypes.STRING(200),
    wirelessCharge: DataTypes.STRING(200)
  }, {
    sequelize,
    modelName: 'Battery',
  });
  return Battery;
};