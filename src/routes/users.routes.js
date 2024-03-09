const express = require('express');
const routes = express.Router();
/* const usersController = require('../controllers/usersController') */

routes.get("/login", (req,res)=>{
    res.render("users/login.ejs");
});
routes.get("/register", (req,res)=>{
    res.render("users/register.ejs");
});

/* router.get('/', usersController.getAll);
router.get('/:id', usersController.getOne); */

module.exports = routes;