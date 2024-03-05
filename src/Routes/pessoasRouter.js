const { Router } = require("express");
const PessoaController = require("../Controller/PessoaController.js");

const pessoaController = new PessoaController();

const router = Router();

router.get("/pessoas", (req, res) => pessoaController.getAll(req, res));
router.get("/pessoas/:id", (req, res) => pessoaController.getById(req, res));
router.post("/pessoas/add", (req, res) => pessoaController.create(req, res));
router.delete("/pessoas/delete/:id", (req, res) => pessoaController.delete(req, res));
router.put("/pessoas/atualiza/:id", (req, res) => pessoaController.atualizarDados(req, res));


module.exports = router;