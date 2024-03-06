const Services = require("./Services.js");


class PessoasServices extends Services {
  constructor() {
    super("Pessoa");
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
}

module.exports = PessoasServices;
