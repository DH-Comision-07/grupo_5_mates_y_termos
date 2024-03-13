const path = require('path');

const productsController = { 
    getOne: (req,res)=> {res.render("products/productDetail.ejs")},
    getCart: (req,res)=> {res.render("products/productCart.ejs")},
    update: (req,res)=> {
        const product = { 
            id: 1,
            name: "Mate camionero Patricio Rey",
            description: "Calabaza ergonómica y duradera para un agarre cómodo y auténtico disfrute." +
            "Detalles resistentes en acero inoxidable que aportan un toque moderno y aseguran durabilidad." + 
            "Diseño único que combina tradición y sofisticación, realzando la belleza natural de la calabaza.",
            price: "3500",
            images: ["el-mateador-imagenes-02.jpg", "el-mateador-imagenes-03.jpg", "el-mateador-imagenes-04.jpg"],
            category: "mate",
            colors: ["rojo", "azul", "verde"],
            stock: 10
            }
        res.render("products/product.ejs", { product }
    )},
    create: (req,res)=> {
        const product = { 
            id: "",
            name: "",
            description: "",
            price: "",
            images: [],
            category: "",
            colors: [],
            stock: ""
            }
        res.render("products/product.ejs", { product }
    )}
}

module.exports = productsController;