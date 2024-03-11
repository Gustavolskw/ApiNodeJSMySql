const dataSource = require("../database/models");
const Services = require("./Services.js");


class PessoasServices extends Services {
  constructor() {
    super("Pessoa");
    this.matriculaServices = new Services("Matricula");
  }
  async getMatriculasPorEstudante(Id) {
    const estudante = await super.GetDataById(Id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }
  async getAllPessoas() {
    const listaPessoas = await super.GetDataByScopes("todosRegistros");
    return listaPessoas;
  }
  async PegaTodasMatriculasPorEstudante(id) {
    const estudante = await super.GetDataById(id);
    const listaMatriculas = await estudante.getTodasMatriculas();
    return listaMatriculas;
  }

  async cancelaMatriculaEstudanteMethod(estudanteId) {
    return dataSource.sequelize.transaction(async (transation) => {
      await super.UpdatedData({ ativo: "false" }, { id: estudanteId }, transation);
      await this.matriculaServices.UpdatedData({ status: "cancelado" }, { estudante_id: estudanteId }, transation);
    });
  }
}

module.exports = PessoasServices;
