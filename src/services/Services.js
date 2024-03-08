const dataSource = require("../database/models");

class Services {
  constructor(nomdeDoModel) {
    this.model = nomdeDoModel;
  }

  async GetAllData(where = {}) {
    return dataSource[this.model].findAll({ where: { ...where } });
  }

  async GetDataByScopes(escopo) {
    return dataSource[this.model].scope(escopo).findAll();
  }

  async GetDataById(id) {
    return dataSource[this.model].findByPk(id);
  }
  async GetOneData(where) {
    return dataSource[this.model].findOne({ where: { ...where } });
  }
  async CreateEntity(dadosDaEntidade) {
    return dataSource[this.model].create(dadosDaEntidade);
  }
  async deleteData(where) {
    return dataSource[this.model].destroy({ where: { id: { ...where } } });
  }

  async UpdatedData(dados, where) {
    const ListaDedadosAtualizados = dataSource[this.model].update(dados, { where: { ...where } });
    if (ListaDedadosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }
  async getAndCountTable(options = {}) {
    return dataSource[this.model].findAndCountAll({ ...options });
  }
}

module.exports = Services;