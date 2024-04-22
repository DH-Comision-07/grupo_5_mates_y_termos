const express = require("express");
const path = require("path");

const methodOverride =  require('method-override');
const app = express();

const session = require('express-session');
const cookieParser = require ("cookie-parser");

// Cookies de acceso
const credentialMid = require ("./middlewares/credentialsMiddlewares");

/* acceso a carpetas de recursos estaticos Public */
app.use(express.static("public"));

// capturar informacion GET-POST-PUT-DELETE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Configuro EJS como el template engine */
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

// ejecutamos SESSION 
app.use(session( {secret: "Secret unique!!!", resave: false, saveUninitialized: false }));

// Method Override
app.use(methodOverride('_method'));

// Cookie-Parser
app.use(cookieParser());

// recupera cookies si selecciono "Recordar Usuario"
app.use(credentialMid.access);
app.use(credentialMid.currentUserMid);

/* inicializa servidor, ruta "Home" localhost:3043*/
const port = 3043;
app.listen(port, () => console.log(`http://localhost:${port}`));

const indexRouter = require('./routes/index.routes');
app.use('/', indexRouter);

app.use((req, res, next) => {
    res.status(404).render('error404.ejs');
    next();
})