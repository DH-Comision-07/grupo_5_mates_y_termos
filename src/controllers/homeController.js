const fs = require('fs');
const path = require('path');

const homeService = require ('../services/homeService')

const db = require ("../database/models");
const op = db.Sequelize.Op;

const homeController = { 

    // Todos los productos
    index: function (req,res){
        homeService.getAll() //esta es la promesa
        .then((productos) => { //en productos entra la promesa            
            res.render("index.ejs", {
                discountNo: productos.discountNo,
                discountYes: productos.discountYes
            });
        })
        .catch((error) => {
            res.render("index.ejs", {
                discountNo: [],
                discountYes:[] ,
                error: error
            });
        });
    }    
};

module.exports = homeController;