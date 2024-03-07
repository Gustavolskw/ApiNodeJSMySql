'use strict';
const isvalido = require("../../utils/validate.js");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: 'docente_id'
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado' },
        as: 'aulasMatriculadas'
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        as: 'todasMatriculas'
      });
    }
  }
  Pessoa.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 50],
          msg: "campo nome deve ter no minimo 3 caracteres ou no maximo 50"
        },
        notEmpty: { args: true, msg: "Campo Nome não pode ser Vazio" }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: { args: true, msg: "Formato do Email Inválido" } }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        cpfValido: (cpf) => {
          if (!isvalido(cpf)) throw new Error("Numero de Cpf Invalido");
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    defaultScope: {
      where: { ativo: true }
    },
    scopes: {
      todosRegistros: {
        where: {}
      }
    }
  });
  return Pessoa;
};