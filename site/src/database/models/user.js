'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Avatar,{
        as : 'avatar'
      })
      User.belongsTo(models.Rol,{
        as : 'rol'
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
    avatarId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};