const fs = require('fs');
const path = require ("path");

let usersService = require('../model/userService');

const parseUsers = require ("../model/users.json");
const usersFilePath = path.join(__dirname, '../model/users.json');

const { validationResult } = require('express-validator');

const usersController = { 
    start: (req,res) =>{res.render("users/indexUsers.ejs")},

    getLogin: (req,res)=> {res.render("users/login.ejs")},

    processLogin: (req,res)=> {
        let error = validationResult(req);
        if (error.isEmpty()) {
            let archivoUsuarios = JSON.parse(fs.readFileSync(usersFilePath));
            let usuarioLogueado = archivoUsuarios.find(usuario => usuario.userEmail == req.body.userEmail);
           
            if (usuarioLogueado){
                req.session.logueadoUsuario = usuarioLogueado;
            }

            // Guardo las cookies si el usuario tildo "recordar usuario"
            if (usuarioLogueado && req.body.rememberUsers) {
                res.cookie("email", usuarioLogueado.userEmail, {maxAge:90000});
            }
            res.redirect("/");
            
        } else {
            res.render("users/login.ejs", {errors: error.mapped(), old: req.body});
        }
    },

    getRegister: (req,res)=> {res.render("users/register.ejs")},

    register: (req,res)=> {
        let error = validationResult(req);
        if (!error.isEmpty()){
            res.render("users/register.ejs", {errors: error.mapped(), old: req.body})
        } else {
            res.render("users/indexUsers.ejs", {users: usersService.createUsers(req.body, req.file.filename)})
            
        }
    },

    logout: (req, res) => {
        //borra cookies
        res.clearCookie("email");
        //destruye session
        req.session.destroy();
        res.redirect("/");
    }
}

module.exports = usersController;