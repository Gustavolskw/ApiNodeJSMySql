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
  async PegaTodasMatriculasPorEstudante(id) {
    const estudante = await super.GetDataById(id);
    const listaMatriculas = await estudante.getTodasMatriculas();
    return listaMatriculas;
  }
}

module.exports = PessoasServices;
