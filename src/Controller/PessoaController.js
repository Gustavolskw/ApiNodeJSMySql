const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaService.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async GetMatriculas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoaServices.getMatriculasPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({ message: "Erro na Requisição", error: erro });
    }
  }

  async GetAllPessoas(req, res) {
    try {
      const listaTodasPessoas = await pessoaServices.GetDataByScopes();
      return res.status(200).json(listaTodasPessoas);
    } catch (error) {
      return res.status(500).json({ message: "Erro na Requisição", error: error });
    }
  }
  async GetAllMatriculasAtivas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoaServices.PegaTodasMatriculasPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({ message: "Erro na Requisição", error: erro });
    }
  }
}

module.exports = PessoaController;