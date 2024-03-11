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
router.put("/pessoas/:estudante_id/cancela", (req, res) => pessoaController.cancelaMatriculaEstudante(req, res));
router.get("/pessoas/:estudante_id/matriculas/all", (req, res) => pessoaController.GetAllMatriculasAtivas(req, res));
router.get("/pessoas/:estudante_id/matriculas/confirmadas", (req, res) => matriculaController.getMatriculasPorEstudante(req, res));
router.get("/pessoas/matriculas/lotadas", (req, res) => matriculaController.getCursosLotados(req, res));
router.get("/pessoas/:estudante_id/matriculas", (req, res) => pessoaController.GetMatriculas(req, res));
router.get("/pessoas/:estudante_id/matriculas/:id", (req, res) => matriculaController.getOneData(req, res));
router.put("/pessoas/:estudante_id/matriculas/:id", (req, res) => matriculaController.atualizarDados(req, res));
router.put("/pessoas/:estudante_id/matriculas/:id", (req, res) => matriculaController.excluiDados(req, res));
router.post("/pessoas/:estudante_id/matriculas", (req, res) => matriculaController.create(req, res));





module.exports = router;