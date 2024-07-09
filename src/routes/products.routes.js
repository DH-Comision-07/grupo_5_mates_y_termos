const express = require('express');
const routes = express.Router();
const path = require ("path");

const productsController = require('../controllers/productsController');

// TODOS (all) los productos
routes.get('/index/', productsController.index); 

// TODOS (all) los productos de Oferta
routes.get('/offer/', productsController.indexOffer);

// DETALLE (detail) productos
routes.get("/productDetail/:id", productsController.detail);

// /* CARRITO compra (cart) producto */ 
routes.get("/productCart", productsController.getCart);

// /* CARRITO compra (cart) producto */ 
routes.get("/buyProduct", productsController.getBuy);

routes.get('/search', productsController.search); 

module.exports = routes;