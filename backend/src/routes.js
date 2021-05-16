const express = require("express");
const multer = require('multer');

const uploadConfig = require('./config/upload');

const UserController = require('./controllers/UserControllers')
const SpotController = require('./controllers/SpotControllers')

const routes = express.Router();
const upload = multer(uploadConfig);

/* 
  QUERY PARAMS: Filtros e paginação; (Get)
  ROUTE PARAMS: Identificar recursos (atualizar/deletando)
  REQUEST BODY: Conteúdo na hora de criar/ editar (JSON)
*/

routes.post("/sessions", UserController.store);
routes.post("/spots", upload.single('thumbnail'), SpotController.store);

module.exports = routes;
