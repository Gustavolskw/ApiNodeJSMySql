const { Router } = require("express");
const PessoaController = require("../Controller/PessoaController.js");
const MatriculaController = require("../Controller/MatriculaController.js");

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get("/pessoas", (req, res) => pessoaController.getAll(req, res));
router.get("/pessoas/all", (req, res) => pessoaController.GetAllPessoas(req, res));
router.get("/pessoas/:id", (req, res) => pessoaController.getById(req, res));
router.post("/pessoas/add", (req, res) => pessoaController.create(req, res));
router.delete("/pessoas/delete/:id", (req, res) => pessoaController.excluiDados(req, res));
router.put("/pessoas/atualiza/:id", (req, res) => pessoaController.atualizarDados(req, res));
router.get("/pessoas/:estudanteId/matriculas/all", (req, res) => pessoaController.GetAllMatriculasAtivas(req, res));
router.get("/pessoas/:estudanteId/matriculas", (req, res) => pessoaController.GetMatriculas(req, res));
router.post("/pessoas/:estudanteId/matriculas", (req, res) => matriculaController.create(req, res));




module.exports = router;