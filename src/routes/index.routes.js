const express = require('express');
const routes = express.Router(); 

const productRoutes = require('./products.routes');
const userRoutes = require('./users.routes');

routes.get("/", (req,res)=>{res.render("index.ejs");});

routes.use('/products', productRoutes);

routes.use('/users', userRoutes);

module.exports = routes;