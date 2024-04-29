const fs = require('fs');
const path = require ("path");
const bcrypt = require ("bcryptjs");
const parseUsers = require ("./users.json");
const usersFilePath = path.join(__dirname, '../model/users.json');
const idMayor = require("../moduls/mayorId");

let usersService = {

    users: parseUsers,

    save: function(user) {
        this.users.push(user);
        fs.writeFileSync(usersFilePath, JSON.stringify(this.users));
    },
    
    createUsers: function(body, file){
        const id = idMayor.idMayorUsers() + 1;
        const {name, lastName, userEmail, userBirthdate} = body;
        const passwordUser = bcrypt.hashSync(body.passwordUser, 12) 
        const image = file;
        const role = "1";
        const usersAdd = {id, name, lastName, userEmail, userBirthdate, image, passwordUser, role};
        this.save(usersAdd);
    }
    
};
module.exports = usersService;