const express = require("express");

const UserController = require('./controllers/UserControllers')

const routes = express.Router();

/* 
  QUERY PARAMS: Filtros e paginação; (Get)
  ROUTE PARAMS: Identificar recursos (atualizar/deletando)
  REQUEST BODY: Conteúdo na hora de criar/ editar (JSON)
*/

routes.post("/sessions", UserController.store);

module.exports = routes;
