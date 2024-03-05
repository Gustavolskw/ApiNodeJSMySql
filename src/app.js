const express = require("express");
const routes = require("./Routes");


const app = express();
app.use(express.json());

routes(app);

module.exports = app;
