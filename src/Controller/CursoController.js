const { Op } = require("sequelize");
const CursosServices = require("../services/CursoServices.js");
const Controller = require("./Controller.js");

const cursosServices = new CursosServices();


class CursosController extends Controller {
  constructor() {
    super(cursosServices);
  }

  async getCursos(req, res) {
    const { data_inicial, data_final } = req.query;

    const where = {};

    data_inicial || data_final ? where.data_inicio = {} : null;
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    data_final ? where.data_inicio[Op.lte] = data_final : null;

    try {
      const listaCursos = await cursosServices.GetAllData(where);
      res.status(200).json(listaCursos);

    } catch (error) {
      return res.status(500).json({ message: "Erro na Requisição", error: error });
    }



  }


}


module.exports = CursosController;