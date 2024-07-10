const fs = require('fs');
const path = require('path');

const db = require ("../database/models");
const Op = db.Sequelize.Op;

const adminService = require ('../services/adminService');

const { validationResult } = require('express-validator');

const adminController = { 

    // Admin Products
    start: (req,res) =>{res.render("products/productsAdmin.ejs")},

    // Todos los productos administrador
    indexAdmin: function (req, res) {
        const orderBy = req.query.orderBy || 'id'; // Por defecto ordena por nombre
        const orderDirection = req.query.orderDirection || 'ASC'
        
        adminService.getAdmin(orderBy, orderDirection)
        .then((productos) => {
            res.render("products/productAllAdmin.ejs", { productos: productos,orderBy, orderDirection });
        })
        .catch((error) => {
            res.render("products/productAllAdmin.ejs", { productos: error });
        });
    },

    //Create products form

    create: async (req, res) => {
        try {
            const {categorias, colores} = await adminService.getAll() //esta es la promesa
            res.render("products/productCreate.ejs", {categorias, colores});
        } catch (error) {
            console.error('Error categories and colors:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    
    // Create products button
    store: async function (req,res) {
        let error = validationResult(req);
        if (error.isEmpty()) { 
        try {
            await adminService.createProduct(req.body, req.files);
            res.redirect(`/admin`);
        } catch (error) {
            res.send(error);
        } 
    } else {
        const {categorias, colores} = await adminService.getAll();
        res.render("products/productCreate.ejs", {
            categorias, colores, 
            errors: error.mapped(), 
            old: req.body});
    }
        },

    // Edit products form
    edit: async function(req, res) {
        try {
            const productos = await adminService.getOneBy(req.params.id);
            if (productos.id === 0) {
                return res.render("products/indexProduct.ejs");
            }
            const categorias = db.Categorias.findAll();
            const colores = db.Colores.findAll();
            const imagenes = db.Images.findAll();
    
            Promise.all([categorias, colores, imagenes])
                .then(function([categorias, colores, imagenes]){
                    res.render("products/productEdit.ejs", {
                        productos: productos, 
                        categorias: categorias, 
                        colores: colores, 
                        imagenes: imagenes
                    });
                })
                .catch(error => {
                    console.error('Error en Categorias, Colores o Imagenes: ', error);
                    res.status(500).send("Ha ocurrido un error inesperado");
                });
        } catch (error) {
            console.error('Error product: ', error);
            res.status(500).send("Ha ocurrido un error inesperado");
        }  
    },

    // Edit product button
    update: async function(req, res) {
        try {
            await adminService.updateBy(req.body, req.params.id);
            res.redirect(`/admin/index`);
        } catch (error) {
            res.send("No se pudo editar!!");
        }
    },

    // Delete products form
    delete: async function(req, res) {
        try {
            const productos = await adminService.getOneBy(req.params.id)
            
            if (productos.id === 0) {
                return res.render("products/indexProduct.ejs");;
            }

            const categorias = db.Categorias.findAll()
            const colores = db.Colores.findAll()
            const imagenes = db.Images.findAll()
            Promise.all([productos, categorias, colores, imagenes])
                .then(function([productos, categorias, colores, imagenes]){
                    res.render("products/productDelete.ejs", {
                        productos:productos, 
                        categorias: categorias, 
                        colores:colores, 
                        imagenes:imagenes
                    });
                })
        } catch (error) {
            res.send("Ha ocurrido un error inesperado").status(500);
        }    
    },

    // Delete product button
    destroy : async function(req, res) {
        try {
            await db.Images.destroy ({
                where: { product_id: req.params.id }
            });
            await db.Carritos.destroy ({
                where: { product_id: req.params.id }
            });
            await db.Favoritos.destroy ({
                where: { product_id: req.params.id }
            });
            await db.Productos.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.redirect(`/admin/index`);
        } catch (error) {
            res.send("No se pudo borrar!!");
        }
    }
};

module.exports = adminController;