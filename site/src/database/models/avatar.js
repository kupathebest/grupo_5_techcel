'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avatar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Avatar.hasOne(models.User,{
        as : 'User',
        foreignKey: 'avatarId'
      })
    }
  };
  Avatar.init({
    file: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Avatar',
  });
  return Avatar;
};