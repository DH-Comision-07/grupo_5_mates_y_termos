const fs = require('fs');
const path = require ("path");
const { check } = require('express-validator');
const bcrypt = require ("bcryptjs");

const usersFilePath = path.join(__dirname, '../model/users.json');
const archivoUsuarios = JSON.parse(fs.readFileSync(usersFilePath));

const validateUser = [
    check('userEmail')
        .isEmail().withMessage('Debes completar un email válido')
        
         //evalua si el email ingresado esta registrado
        .custom((valueEmail, {req}) => {
            let usuarioEncontrado = archivoUsuarios.find(usuario => usuario.userEmail == valueEmail);
            if (typeof usuarioEncontrado === "undefined") {
                throw new Error ("Usuario no se encuentra registrado...");   
            }
            return true;
            }
        ),

    check('passwordUser')
        .notEmpty().withMessage('Debes completar la contraseña')
        
        //valido si la contraseña ingresada es igual a la hasheada
        .custom((passwordValided, {req}) => {
            let usuarioEncontrado = archivoUsuarios.find(usuario => usuario.userEmail == req.body.userEmail);
            if (typeof usuarioEncontrado === "undefined" || !bcrypt.compareSync(passwordValided, usuarioEncontrado.passwordUser)) {
                throw new Error ("Contraseña incorrecta o usuario inexistente");   
            }
            return true;
            }
        ),
];

module.exports = validateUser;