const MatriculasServices = require("../services/MatriculaServices.js");
const Controller = require("./Controller.js");


const matriculasServices = new MatriculasServices();


class MatriculaController extends Controller {
  constructor() {
    super(matriculasServices);
  }
}


module.exports = MatriculaController;