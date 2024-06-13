window.addEventListener("load", function() {
    let formEditProduct = document.querySelector("form.product--form");

    formEditProduct.addEventListener("submit", function(e) {
        
        // Vaciar las listas de errores previas
        document.querySelector("div.erroresName ul").innerHTML = '';
        document.querySelector("div.erroresDescription ul").innerHTML = '';
        document.querySelector("div.erroresPrice ul").innerHTML = '';
        document.querySelector("div.erroresStock ul").innerHTML = '';
        
        let errores =[]
        // Campo Nombre
        let nombre = document.querySelector("input.name");
        //let erroresNombre = [];
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
          //let erroresDescripcion = [];
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

        // Campo Precio
        let precio = document.querySelector("input.prices");
        //let erroresPrecio = [];
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
        //let erroresStock = [];
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