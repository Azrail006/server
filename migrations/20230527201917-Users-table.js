'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Table', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        type: Sequelize.DataTypes.STRING
      },
      price: {
        type: Sequelize.DataTypes.TEXT
      },
      stock: {
        type: Sequelize.DataTypes.TEXT
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Table')
  }
};
