const CategoriasServices = require("../services/CategoriaServices.js");
const Controller = require("./Controller.js");


const categoriasServices = new CategoriasServices();


class CategoriaController extends Controller {
  constructor() {
    super(categoriasServices);
  }
}


module.exports = CategoriaController;