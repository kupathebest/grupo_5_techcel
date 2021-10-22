'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Camera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Camera.hasOne(models.Product,{
        as : 'product',
        foreignKey: 'cameraId'
      })
    }
  };
  Camera.init({
    mainCamera: DataTypes.STRING,
    frontCamera: DataTypes.STRING,
    videoCamera: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Camera',
  });
  return Camera;
};