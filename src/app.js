const express = require("express");
const app = express();

const indexRouter = require('./routes/index.routes');

var path = require("path");

/* acceso a carpetas de recursos estaticos Public */
app.use(express.static("public"));

/* Configuro EJS como el template engine */
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

/* inicializa servidor 3043*/
const port = 3043;
app.listen(port, () => console.log(`http://localhost:${port}`));

/* ruta "Home" localhost:3043 */
app.use('/', indexRouter);

app.post("/addProduct", (req,res)=>{res.render("index.ejs");
});