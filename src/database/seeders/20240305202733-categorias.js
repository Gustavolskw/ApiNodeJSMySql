'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      {
        titulo: 'Node.js',

      },
      {
        titulo: 'Java',

      },
      {
        titulo: 'Python',

      },
      {
        titulo: 'C#',

      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};