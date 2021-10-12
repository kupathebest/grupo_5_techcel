'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Net extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Net.hasOne(models.Product,{
        as : 'product',
        foreignKey: 'netId'
      })
    }
  };
  Net.init({
    twoG: DataTypes.STRING,
    threeG: DataTypes.STRING,
    fourG: DataTypes.STRING,
    fiveG: DataTypes.STRING,
    gprs: DataTypes.STRING,
    sim: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Net',
  });
  return Net;
};