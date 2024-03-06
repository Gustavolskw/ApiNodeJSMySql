const express = require("express");
const pessoas = require("./pessoasRouter.js");
const categorias = require("./categoriaRouter.js");

const cursos = require("./cursosRouter.js");

module.exports = app => {
  app.use(express.json(),
    pessoas, cursos, categorias
  );
};