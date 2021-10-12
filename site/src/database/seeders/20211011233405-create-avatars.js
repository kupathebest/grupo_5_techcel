'use strict';

const users = require('../../data/usuarios.json')
const avatar = []

users.forEach(user => {
  let item = {

    file: user.avatar,
    createdAt: new Date,
    updatedAt: new Date
  }
  avatar.push(item)
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('avatars', avatar, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('avatars', avatar, {});
  }
};

