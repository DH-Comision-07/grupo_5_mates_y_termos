const path = require ("path");
const multer = require ("multer");
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let productImage = path.join(__dirname, "../../public/images")
        cb(null, productImage);
    },
    filename: function(req,file,cb){        
        let imageName = "image-" + Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
});
const uploadFile = multer({storage: diskStorage});

module.exports = uploadFile;