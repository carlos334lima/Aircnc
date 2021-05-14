const express = require("express");

const DevController = require('./controllers/DevControllers')

const routes = express.Router();

/* 
  QUERY PARAMS: Filtros e paginação; (Get)
  ROUTE PARAMS: Identificar recursos (atualizar/deletando)
  REQUEST BODY: Conteúdo na hora de criar/ editar (JSON)
*/

routes.get("/users/:id", (req, res) => {
  res.json({ message: "hellooo" });
});

routes.post("/users", DevController.store);

module.exports = routes;
