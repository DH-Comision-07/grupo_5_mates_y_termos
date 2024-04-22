const fs = require('fs');
const path = require ("path");

const usersFilePath = path.join(__dirname, '../model/users.json');
let archivoUsuarios = JSON.parse(fs.readFileSync(usersFilePath));

// middelwares que determinan acceso segun el logueo
let credentialMid = {
	isLogged: function (req) {
		return req.session.logueadoUsuario != undefined
	},

	guestMid: function (req, res, next) {
		if (this.isLogged(req)) {
			return res.redirect("/");		
        };
		next();
    },

	adminMid: function (req,res,next){
		/* en cambio de "!this.isAdmin(req.session.logueadoUsuario)"
		se puede poner "req.session.logueadoUsuario.role !=3" */
		if (!this.isLogged(req) || !this.isAdmin(req.session.logueadoUsuario)) {
			return res.render("users/sinPermiso.ejs");
		};
		next();
	},
	
	// Middlewares loguea automaticamente si esta el mail en cookies
	access: function (req, res, next) {
    	if (!this.isLogged(req) && req.cookies.userEmail) {
        	return req.session.logueadoUsuario = archivoUsuarios.find(usuario => usuario.userEmail == req.cookies.email);
    	}
    	next();
	},
	
	currentUserMid: function (req, res, next) {
		if (this.isLogged(req)) {
			res.locals.usuario = req.session.logueadoUsuario;
			res.locals.isAdmin = this.isAdmin(req.session.logueadoUsuario);
		}
		next();
	},
	isAdmin: function (req) {
		return req.role == 3;
	}
};

credentialMid.guestMid = credentialMid.guestMid.bind(credentialMid);
credentialMid.adminMid = credentialMid.adminMid.bind(credentialMid);
credentialMid.access = credentialMid.access.bind(credentialMid);
credentialMid.currentUserMid = credentialMid.currentUserMid.bind(credentialMid);

module.exports = credentialMid;
