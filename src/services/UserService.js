const fs = require('fs');
const path = require ("path");
const bcrypt = require ("bcryptjs");

const db = require ("../database/models");
const Op = db.Sequelize.Op;

let usersService = {

    createUsers: async function(newUsuario,newImage){
        console.log(newImage);
        try {
            let user = new Usuario(newUsuario);
            //let image = new Imagen(newImage);
            let addUser = await db.Usuarios.create(user, {include:[{association: "productos"}]})
            
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
    this.image="avatar1.svg";
    this.password = bcrypt.hashSync(passwordUser, 12);
    this.role = 1;
    
};
function Imagen({image}){
    this.image= image;
};

module.exports = usersService;