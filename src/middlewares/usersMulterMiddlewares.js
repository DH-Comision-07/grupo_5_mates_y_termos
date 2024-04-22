const path = require ("path");
const multer = require ("multer");

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let usersImage = path.join(__dirname, "../../public/images/avatars");
        cb(null, usersImage);
    },
    filename: function(req,file,cb){        
        let usersName = "avatar-" + Date.now() + path.extname(file.originalname);
        cb(null, usersName);
    }
});
const uploadFileUsers = multer({ storage: diskStorage});

module.exports = uploadFileUsers;

/* Para limitar que no se suban mas de tres imagenes
const uploadFile = multer({ storage: diskStorage, limits: {files: 3}}).array('images', 3)
*/