const fs = require('fs');
const path = require('path');

const productService = require ('../services/productService')

const db = require ("../database/models");
const op = db.Sequelize.Op;

const productsController = { 

    // Todos los productos
    index: function (req,res){
        productService.getAll() //esta es la promesa
        .then((productos) => { //en productos entra la promesa
            res.render("products/productAll.ejs", {productos: productos});
        })
        .catch((error) => {
            res.render("products/productAll.ejs", {productos: error});
        })
    },

    // Detalle de cada producto, agrego ASYNC creando una funcion asincrona
    detail: async function (req, res) {
        try {
            let productos = await productService.getOneBy(req.params.id); // aqui voy al service
            if (productos == null) { 
                res.status(404).render("error404.ejs"); 
            } else {
                res.render("products/productDetail.ejs", {productos: productos});   
            } 
        } catch (error) {
            res.render("products/productDetail.ejs", {productos: error});
        }
    },

    // Cart products
    getCart: (req,res)=> {res.render("products/productCart.ejs")},  
};

module.exports = productsController;