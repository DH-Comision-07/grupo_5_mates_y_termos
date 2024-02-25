const express = require("express");
const app = express();

const path = require ("path");

const publicPath = path.resolve(__dirname , "./public");

app.use (express.static (publicPath));

/* inicializa servidor 3043*/
app.listen (3043, () => 
    console.log("Servidor corriendo en Puerto 3043")
);

/* ruta "Home" localhost:3043 */
app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

/* ruta "Register" localhost:3043/register */
app.get("/register", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

/* ruta "Login" localhost:3043/login */
app.get("/login", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

/* ruta "Detalle Producto" localhost:3043/productDetail */
app.get("/productDetail", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
});

/* ruta "Carrito de compras" localhost:3043/productCart */
app.get("/productCart", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
});
