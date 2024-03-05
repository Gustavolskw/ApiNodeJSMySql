'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      docente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,

        //{model: nome da tabela, key: chave estrangeira}
        references: { model: "pessoas", key: "id" }
      },
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        //{model: nome da tabela, key: chave estrangeira}
        references: { model: "categorias", key: "id" }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cursos');
  }
};