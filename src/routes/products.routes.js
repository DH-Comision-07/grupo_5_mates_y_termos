const express = require('express');
const routes = express.Router();
/* const productsController = require('../controllers/productsController'); */

routes.get("/productDetail", (req,res)=>{res.render("products/productDetail.ejs");});
routes.get("/productCart", (req,res)=>{res.render("products/productcart.ejs");});

/* router.get('/', productsController.getAll);
router.get('/:id', productsController.getOne);
 */
module.exports = routes;