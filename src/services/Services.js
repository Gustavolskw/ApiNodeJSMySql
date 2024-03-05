const dataSource = require("../models");

class Services {
  constructor(nomdeDoModel) {
    this.model = nomdeDoModel;
  }

  async GetAllData() {
    return dataSource[this.model].findAll();
  }

  async GetDataById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async CreateEntity(dadosDaEntidade) {
    return dataSource[this.model].create(dadosDaEntidade);
  }
  async deleteData(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }

  async UpdatedData(dados, id) {
    const ListaDedadosAtualizados = dataSource[this.model].update(dados, { where: { id: id } });
    if (ListaDedadosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services;