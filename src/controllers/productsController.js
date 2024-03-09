/* let productos = require('../models/products'); */
const path = require('path');

const productsController = { 
    getOne: (req,res)=> {res.render("products/productDetail.ejs")},
    getCart: (req,res)=> {res.render("products/productCart.ejs")},
}
/* getOne: (req, res) => res.render('productDetail', {product: productos.getOneBy(req.params.id)}),} */

module.exports = productsController;