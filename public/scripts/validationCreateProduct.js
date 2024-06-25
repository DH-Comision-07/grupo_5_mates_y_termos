window.addEventListener("load", function() {
    let formCreateProduct = document.querySelector("form.form--products");

    formCreateProduct.addEventListener("submit", function(e) {
        
        // Vaciar las listas de errores previas
        document.querySelector("div.erroresName ul").innerHTML = '';
        document.querySelector("div.erroresImage ul").innerHTML = '';
        document.querySelector("div.erroresDescription ul").innerHTML = '';
        document.querySelector("div.erroresPrice ul").innerHTML = '';
        document.querySelector("div.erroresStock ul").innerHTML = '';
        
        let errores =[]
        // Campo Nombre
        let nombre = document.querySelector("input.name");
        errores =[]
        if (nombre.value == "") {
            errores.push("Completar Nombre del producto");
        }
        if (nombre.value.length < 3) {
            errores.push("Nombre Producto debe ser mayor a 3 caracteres.");
        }
        
        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresName ul");
            errores.forEach(error => {
                ulErrores.innerHTML += "<li>" + error + "</li>";
            });
        }

          // Campo Descripción
          let description = document.querySelector("textarea.description");
          errores =[]
          if (description.value == "") {
              errores.push("Completar descripción del producto");
          }
          if (description.value.length < 6) {
              errores.push("Descripción del producto debe ser mayor a 6 caracteres.");
          }
          
          if (errores.length > 0) {
              e.preventDefault();
              let ulErrores = document.querySelector("div.erroresDescription ul");
              errores.forEach(error => {
                  ulErrores.innerHTML += "<li>" + error + "</li>";
              });
          }

        // Campo Imagen
        let imagen = document.querySelector("input.image");
        errores =[]
        if (imagen.value == "") {
            errores.push("Subir imagenes producto.");
        }
        
        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresImage ul");
            errores.forEach(error => {
                ulErrores.innerHTML += "<li>" + error + "</li>";
            });
        }

        // Campo Precio
        let precio = document.querySelector("input.prices");
        errores =[]
        if (precio.value == "") {
            errores.push("Completar Precio del producto");
        }
        
        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresPrice ul");
            errores.forEach(error => {
                ulErrores.innerHTML += "<li>" + error + "</li>";
            });
        }

        // Campo Stock
        let stock = document.querySelector("input.stocks");
        errores =[]
        if (stock.value == "") {
            errores.push("Cargar stock del producto");
        }
        
        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresStock ul");
            errores.forEach(error => {
                ulErrores.innerHTML += "<li>" + error + "</li>";
            });
        }
    });
});