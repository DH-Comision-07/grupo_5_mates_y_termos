const express = require('express');
const routes = express.Router();
const path = require ("path");

const adminController = require('../controllers/adminController');
const uploadFile = require ("../middlewares/multerMiddlewares");
const credentialMid = require ("../middlewares/credentialsMiddlewares");

const validCreateProduct = require('../middlewares/validCreateProduct');

/* INICIO (start) productos */
routes.get('/', credentialMid.adminMid, adminController.start); 

// TODOS (all) los productos Administrador
routes.get('/index/', credentialMid.adminMid, adminController.indexAdmin); 

/* CREAR (create) producto */
routes.get("/create", credentialMid.adminMid, adminController.create);
routes.post('/', uploadFile, validCreateProduct, adminController.store); 

/* EDITAR (update) producto */ 
routes.get("/update/:id/", credentialMid.adminMid, adminController.edit);
routes.put('/update/:id/', adminController.update); 

/* BORRAR (delete) producto */ 
routes.get("/delete/:id/", credentialMid.adminMid, adminController.delete); 
routes.delete("/delete/:id", adminController.destroy); 

module.exports = routes;