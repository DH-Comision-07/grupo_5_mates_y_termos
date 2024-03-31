const express = require('express');
const routes = express.Router();
const path = require ("path");

const productsController = require('../controllers/productsController');
const uploadFile = require ("../middlewares/multerMiddlewares")

// INICIO (start) productos
routes.get('/', productsController.start); 

// TODOS (all) los productos
routes.get('/index/', productsController.index); 

// DETALLE (detail) productos
routes.get("/productDetail/:id", productsController.detail);

// /* CARRITO compra (cart) producto */ 
routes.get("/productCart", productsController.getCart);

/* CREAR (create) producto */
routes.get("/create", productsController.create);
routes.post('/', uploadFile.single("images"), productsController.store); 

// /* EDITAR (update) producto */ 
routes.get("/update/:id/", productsController.edit);
routes.put('/update/:id/', productsController.update); 

// /* BORRAR (delete) producto */ 
routes.get("/delete/:id/", productsController.delete); 
routes.delete("/delete/:id", productsController.destroy); 


module.exports = routes;