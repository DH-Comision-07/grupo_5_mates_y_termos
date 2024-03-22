const express = require('express');
const routes = express.Router();
const productsController = require('../controllers/productsController');

routes.get("/productDetail/:id", productsController.detail);
routes.get("/productCart", productsController.getCart);
routes.get("/:id/update/", productsController.update);
routes.get("/create", productsController.create);

module.exports = routes;