const express = require('express');
const routes = express.Router();
const path = require ("path");

const productsController = require('../controllers/productsController');

// TODOS (all) los productos
routes.get('/index/', productsController.index); 

// DETALLE (detail) productos
routes.get("/productDetail/:id", productsController.detail);

// /* CARRITO compra (cart) producto */ 
routes.get("/productCart", productsController.getCart);


module.exports = routes;