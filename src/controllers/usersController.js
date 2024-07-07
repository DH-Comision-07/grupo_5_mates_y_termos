const fs = require('fs');
const path = require ("path");

let usersServices = require('../services/UserService');
const db = require ("../database/models");
const Op = db.Sequelize.Op;

const { validationResult } = require('express-validator');

const usersController = { 
    start: (req,res) =>{res.render("users/indexUsers.ejs")},

    chat: (req,res) =>{res.render("users/whatsapp.ejs")},

    getLogin: (req,res)=> {res.render("users/login.ejs")},
    
    processLogin: async function (req,res) {
        let errors = validationResult(req);
    if (errors.isEmpty()) {
        try {
            let usuarioLogueado = await db.Usuarios.findOne({ where: { email: req.body.userEmail } });
            if (usuarioLogueado) {
                req.session.logueadoUsuario = usuarioLogueado;
                // Guardo las cookies si el usuario tildó "recordar usuario"
                if (req.body.rememberUsers) {
                    res.cookie("email", usuarioLogueado.email, { maxAge: 90000 });
                }
                res.redirect("/");
            } else {
                res.render("users/login.ejs", { errors: { msg: 'Usuario no encontrado' }, old: req.body });
            }
        } catch (error) {
            res.send("Error controller: " + error);
        }
    } else {
        res.render("users/login.ejs", { errors: errors.mapped(), old: req.body });
    }
},
    
    getRegister: (req,res)=> {res.render("users/register.ejs")},

    register: async function (req,res) {
        let error = validationResult(req);
        if (error.isEmpty()){
            try {   
                await usersServices.createUser(req.body, req.file.filename);
                res.render("users/indexUsers.ejs");
            } catch (error) {
                res.send("Error al crear usuario " + error);
            }
        } else { 
            res.render("users/register.ejs", {errors: error.mapped(), old: req.body})
        }
    },

    getUpdate: (req,res)=> {res.render("users/edit.ejs")},
  
    // Edit users button
    update: async function(req, res) {
        try {
            const updatedUser =  await usersServices.updateBy(req.body, req.params.id);
            req.session.logueadoUsuario = updatedUser;
            res.redirect(`/`);
        } catch (error) {
            res.send("No se pudo editar!!");
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