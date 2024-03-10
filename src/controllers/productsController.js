/* let productos = require('../models/products'); */
const path = require('path');

const productsController = { 
    getOne: (req,res)=> {res.render("products/productDetail.ejs")},
    getCart: (req,res)=> {res.render("products/productCart.ejs")},
    addProduct: (req,res)=> {res.render("products/productAdd.ejs")},
}
/* getOne: (req, res) => res.render('productDetail', {product: productos.getOneBy(req.params.id)}),} */
module.exports = productsController;