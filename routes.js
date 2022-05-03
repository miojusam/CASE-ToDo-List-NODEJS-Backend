const express = require("express");

const routes = express.Router();
const Controller = require("./controller/Controller.js");

routes.get("/todo", Controller.index);

routes.post("/todo", Controller.store);

routes.patch("/todo/:id", Controller.update);

routes.delete("/todo/:id", Controller.remove);

module.exports = routes;