const { Router } = require("express");
const CursosController = require("../Controller/CursoController");

const cursosController = new CursosController();

const router = Router();

router.get("/cursos", (req, res) => cursosController.getAll(req, res));
router.get("/cursos/:id", (req, res) => cursosController.getById(req, res));
router.post("/cursos/add", (req, res) => cursosController.create(req, res));
router.delete("/cursos/delete/:id", (req, res) => cursosController.delete(req, res));
router.put("/cursos/atualiza/:id", (req, res) => cursosController.atualizarDados(req, res));


module.exports = router;