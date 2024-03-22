const path = require('path');
const productService = require ('../model/productService')

const productsController = { 
    //getOne: (req,res)=> {res.render("products/productDetail.ejs")},
    detail: (req, res) => {res.render("products/productDetail.ejs" , {products: productService.getOneBy(req.params.id)});
},
    getCart: (req,res)=> {res.render("products/productCart.ejs")},
    update: (req,res)=> {
        const product = searchProductById(req.params.id)
        if (!product) {
            res.status(404).send("Product not found")
        }
        res.render("products/product.ejs", { product }
    )},
    create: (req,res)=> {
        const product = new Product(null, null, null, null, [], null, [], null)
        res.render("products/product.ejs", { product }
    )}
}

function searchProductById(id) {
    const products = require(path.join(__dirname, '../model/products.json'))
    const productJson = products.find(product => product.id == id)
    if (!productJson) {
        return null
    }
    const product = new Product(productJson.id, productJson.name, productJson.description, productJson.price, productJson.images, productJson.category, productJson.colors, productJson.stock)
    return product
}

function Product(id, name, description, price, images, category, colors, stock) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.images = images
    this.category = category
    this.colors = colors
    this.stock = stock    
}

module.exports = productsController;