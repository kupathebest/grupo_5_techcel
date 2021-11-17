const bcrypt = require("bcryptjs")
const users = require('../../data/usuarios.json')
const usuario = []

users.forEach(user => {
  let item = {

    name: user.nombre,
    lastName: user.apellido,
    email: user.email,
    password: user.password,
    rolId: 1,
    avatarId: user.id + 1,
    createdAt: new Date,
    updatedAt: new Date
  }
  usuario.push(item)
});
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert("Users",usuario,{});

  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert("Users", null,{});

  }
};
