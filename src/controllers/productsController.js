const fs = require('fs');
const path = require('path');

const productService = require ('../services/productService')



const db = require ("../database/models");
const op = db.Sequelize.Op;

const productsController = { 
    // Todos los productos
    index: async function (req, res) {
        const categoriaSeleccionada = req.query.categoria;
        const precioMin = req.query.precioMin;
        const precioMax = req.query.precioMax;
        try {
            const categorias = await db.Categorias.findAll();
            const productos = await productService.getProducts(categoriaSeleccionada, precioMin, precioMax);
            res.render("products/productAll.ejs", { productos, categorias, categoriaSeleccionada, precioMin, precioMax });
        } catch (error) {
            res.render("products/productAll.ejs", { error });
        }
    },
    indexOffer: function (req,res){
        productService.getAllOffer() //esta es la promesa
        .then((productos) => { //en productos entra la promesa
            res.render("products/productOffer.ejs", {productos: productos});
        })
        .catch((error) => {
            res.render("products/productOffer.ejs", {productos: error});
        })
    },
    // Detalle de cada producto
    detail: async function (req, res) {
        try {
            let productos = await productService.getOneBy(req.params.id); // aqui voy al service
            if (productos == null) { 
                res.status(404).render("error404.ejs"); 
            } else {
                /* muestra productos por categoria
                let productosSugeridos = await productService.getRelated(productos.category_id, productos.id); */
                let productosSugeridos = await productService.getRelated();
                res.render("products/productDetail.ejs", {productos, productosSugeridos });
            } 
        } catch (error) {
            res.render("products/productDetail.ejs", {productos: error});
        }
    },

    // Cart products
    getCart: (req,res)=> {res.render("products/productCart.ejs")}, 
    
    // Buy products
    getBuy: (req,res)=> {res.render("products/buyProduct.ejs")},

    search: async function(req, res) {
        try {
            const query = req.query.q || '';
            const productos = await db.Productos.findAll({include:[
                {association: "producto"}
                ],
                where: {
                    name: {
                        [db.Sequelize.Op.like]: `%${query}%`
                    }
                }   
            });
            res.render("products/productSearch.ejs", { productos: productos, query: query });
        } catch (error) {
            console.error('Error al buscar productos: ', error);
            res.status(500).send("Ocurrido un error inesperado");
        }
    },    
};

module.exports = productsController;