'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('matriculas', [
      {
        estudante_id: 1,
        curso_id: 1,
        status: 'matriculado',
      },
      {
        estudante_id: 2,
        curso_id: 2,
        status: 'matriculado',
      },
      {
        estudante_id: 3,
        curso_id: 3,
        status: 'matriculado',
      },
      {
        estudante_id: 4,
        curso_id: 4,
        status: 'matriculado',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('matriculas', null, {});
  }
};