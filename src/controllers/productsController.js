const path = require('path');

const productsController = { 
    getOne: (req,res)=> {res.render("products/productDetail.ejs")},
    getCart: (req,res)=> {res.render("products/productCart.ejs")},
}

module.exports = productsController;