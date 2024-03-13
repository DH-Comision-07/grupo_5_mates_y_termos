const express = require('express');
const routes = express.Router();
const productsController = require('../controllers/productsController');

routes.get("/productDetail", productsController.getOne);
routes.get("/productCart", productsController.getCart);
routes.get("/update", productsController.update);
routes.get("/create", productsController.create);

module.exports = routes;