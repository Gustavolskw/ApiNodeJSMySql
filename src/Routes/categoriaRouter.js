const { Router } = require("express");

const CategoriaController = require("../Controller/CategoriaController.js");

const categoriaController = new CategoriaController();

const router = Router();

router.get("/categoria", (req, res) => categoriaController.getAll(req, res));
router.get("/categoria/:id", (req, res) => categoriaController.getById(req, res));
router.post("/categoria/add", (req, res) => categoriaController.create(req, res));
router.delete("/categoria/delete/:id", (req, res) => categoriaController.delete(req, res));
router.put("/categoria/atualiza/:id", (req, res) => categoriaController.atualizarDados(req, res));


module.exports = router;