const express = require("express");
const app = express();
const methodOverride =  require('method-override');

const indexRouter = require('./routes/index.routes');

var path = require("path");

/* acceso a carpetas de recursos estaticos Public */
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Configuro EJS como el template engine */
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

/* inicializa servidor 3043*/
const port = 3043;
app.listen(port, () => console.log(`http://localhost:${port}`));

/* ruta "Home" localhost:3043 */
app.use('/', indexRouter);

app.use((req, res, next) => {
    res.status(404).render('error404.ejs');
    next();
})