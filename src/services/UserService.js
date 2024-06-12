const fs = require('fs');
const path = require ("path");
//const bcrypt = require ("bcryptjs");

const db = require ("../database/models");
const Op = db.Sequelize.Op;

let usersServices = {

    createUser: async function(newUsuario,newImage){

        try {
            //let user = new Usuario(newUsuario);
            let {name, lastName, userEmail, birthdate, passwordUser} = newUsuario;
            let email = userEmail
            let image = newImage;
            let password = passwordUser;
            let role = 1;
            let addUser = await db.Usuarios.create({name, lastName, email, birthdate, image, password, role}, {include:[{association: "productos"}]})
            
            return addUser.dataValues
        } catch (error) {
            console.error('Error en Creacion Usuario:', error);
            res.status(500).send('Internal Server Error');
        } 
    }

}

function Usuario({name, lastName, userEmail, birthdate, passwordUser}){
    this.name = name;
    this.lastName = lastName;
    this.email = userEmail;
    this.birthdate = birthdate;
    this.image= "avatar1.svg";
    this.password = passwordUser;
    this.role = 1;
};

function Imagen({image}){
    this.image= image;
};

module.exports = usersServices;