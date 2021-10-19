'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      Product.belongsTo(models.Category,{
        as : 'category'
      })
      Product.hasMany(models.Image, {
        as : 'images',
        foreignKey: 'productId'
      })
      Product.belongsTo(models.Colour,{
        as : 'colour'
      })
      Product.belongsTo(models.MainFeature,{
        as : 'mainFeature'
      })
      Product.belongsTo(models.Display,{
        as : 'display'
      })
      Product.belongsTo(models.Camera,{
        as : 'camera'
      })
      Product.belongsTo(models.Net,{
        as : 'net'
      })
      Product.belongsTo(models.Connectivity,{
        as : 'connectivity'
      })
      Product.belongsTo(models.Battery,{
        as : 'battery'
      })
      
    }
  };
  Product.init({
    shortName: DataTypes.STRING,
    longName: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.DECIMAL(8,0),
    edge: DataTypes.STRING,
    colourId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    mainFeatureId: DataTypes.INTEGER,
    displayId: DataTypes.INTEGER,
    cameraId: DataTypes.INTEGER,
    netId: DataTypes.INTEGER,
    connectivityId: DataTypes.INTEGER,
    batteryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};