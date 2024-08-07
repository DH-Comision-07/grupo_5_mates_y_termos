const express = require('express');
const routes = express.Router(); 

const homeRoutes = require('./home.routes');
const productRoutes = require('./products.routes');
const userRoutes = require('./users.routes');
const adminRoutes = require('./admins.routes'); 

routes.use("/", homeRoutes);

routes.use('/products', productRoutes);

routes.use('/users', userRoutes);

routes.use('/admin', adminRoutes);

routes.get('/session', function (req,res){
    if (req.session.numeroVisita == undefined) {
        req.session.numeroVisita = 0;
    }
    req.session.numeroVisita ++;
    res.send("Session tiene el numero" + req.session.numeroVisita);
});

module.exports = routes;