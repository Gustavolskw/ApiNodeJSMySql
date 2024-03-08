const Sequelize = require("sequelize");
const MatriculasServices = require("../services/MatriculaServices.js");
const Controller = require("./Controller.js");


const matriculasServices = new MatriculasServices();


class MatriculaController extends Controller {
  constructor() {
    super(matriculasServices);
  }

  async getMatriculasPorEstudante(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaDeMatriculasPorEstudante = await matriculasServices.getAndCountTable({
        where: {
          estudante_id: Number(estudante_id),
          status: "matriculado"
        },
        order: [["id", "asc"]]
      });
      res.status(200).json(listaDeMatriculasPorEstudante);
    } catch (error) {
      return res.status(500).json({ message: "Erro na Requisição", error: error });
    }
  }
  async getCursosLotados(req, res) {
    const lotacaoCurso = 2;
    try {
      const cursosLotados = await matriculasServices.getAndCountTable(
        {
          where: {
            status: "matriculado"
          },
          attributes: ["curso_id"],
          group: ["curso_id"],
          having: Sequelize.literal(`count(curso_id) >= ${lotacaoCurso}`)
        });

      res.status(200).json(cursosLotados.count);

    } catch (error) {
      return res.status(500).json({ message: "Erro na Requisição", error: error });
    }
  }
}


module.exports = MatriculaController;