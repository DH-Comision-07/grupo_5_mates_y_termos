window.addEventListener("load", function(){
    let formCreateProduct = document.querySelector("form.form--products");

    formCreateProduct.addEventListener("submit", function(e) {
        
        //Campo Nombre
        let nombre = document.querySelector("input.name");
        let erroresNombre = [];
        if (nombre.value == ""){
            erroresNombre.push("Completar Nombre del producto");
        }
        if (nombre.value.length < 3){
            erroresNombre.push("Nombre Producto debe ser mayor a 3 caracteres.");
        }
        if (erroresNombre.length > 0) {
            e.preventDefault();
            
            let ulErrores = document.querySelector("div.erroresName ul");
    
            for (let i = 0; i < erroresNombre.length; i++) {
                ulErrores.innerHTML += "<li>" + erroresNombre[i] + "</li>"
            }
        };

    //Campo imagen
    let imagen = document.querySelector("input.image");
    let erroresImage = [];
    if (imagen.value == ""){
        erroresImage.push("Subir imagenes producto.");
    };
          
    if (erroresImage.length > 0) {
        e.preventDefault();
        
        let ulErrores = document.querySelector("div.erroresImage ul");

        erroresImage.forEach (error => {
            ulErrores.innerHTML += "<li>" + error + "</li>"
        })
    };

    //Campo Descripcion
    //let description = document.querySelector("input.description");
    let erroresDescripcion = [];
    if (description.value == ""){
        erroresDescripcion.push("Completar descripción del producto");
    };
    if (description.value.length < 6){
        erroresDescripcion.push("Descripción del producto debe ser mayor a 6 caracteres.");
    } ;            
    if (erroresDescripcion.length > 0) {
        e.preventDefault();
        
        let ulErrores = document.querySelector("div.erroresDescription ul");

        erroresDescripcion.forEach (error => {
            ulErrores.innerHTML += "<li>" + error + "</li>"
        })
    };

    //Campo Precio
    let = document.querySelector("input.price");
    let erroresPrecio = [];
    if (price.value == ""){
        erroresPrecio.push("Completar Precio del producto");
        if (erroresPrecio.length > 0) {
            e.preventDefault();
            
            let ulErrores = document.querySelector("div.erroresPrice ul");
    
            erroresPrecio.forEach (error => {
                ulErrores.innerHTML += "<li>" + error + "</li>"
            })
        };
    };

    //Campo Stock
    let stock = document.querySelector("input.stocks");
    let erroresStock = [];
    if (stock.value == ""){
        erroresStock.push("Cargar stock del producto");
        if (erroresStock.length > 0) {
            e.preventDefault();
            
            let ulErrores = document.querySelector("div.erroresStock ul");
    
            erroresStock.forEach (error => {
                ulErrores.innerHTML += "<li>" + error + "</li>"
            })
        };
    };
    
    });
})

/* window.addEventListener("load", function(){
    let formCreateProduct = document.querySelector("form.form--products");

    formCreateProduct.addEventListener("submit", function(msj) {
        let errores = [];
        let nombre = document.querySelector("input.name");

        if (nombre.value == ""){
            errores.push("Completar campo nombre de producto");
        } 

        let  = document.querySelector("input.price");

        if (price.value == ""){
            errores.push("Completar campo precio de producto");
        } 
    
    if (errores.length > 0) {
        msj.preventDefault();
        
        let ulErrores = document.querySelector("div.errores ul");

        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        }
    }
    });
}) */


