window.addEventListener("load", function(){
    let formulario = document.querySelector("form.form--register");

    formulario.addEventListener("submit", function(e){
        let errores = [];
        let campoNombre = document.querySelector("input.name");

        if(campoNombre.value == ""){
            errores = [];
            errores.push("El campo Nombre tiene que estar completo");
        } else if(campoNombre.value.length < 2){
            errores.push("El campo Nombre tiene que tener al menos dos caracteres");
        }
        if (errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresName");
            for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>"+ errores[i] + "</li>" } 
        }
        let campoApellido = document.querySelector("input.lastName");
        
        if(campoApellido.value == ""){
            errores = [];
            errores.push("El campo Apellido tiene que estar completo");
        }else if(campoApellido.value.length < 2){
            errores.push("El campo Apellido tiene que tener al menos dos caracteres");
        }
        if (errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresLastName");
            for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>"+ errores[i] + "</li>" } 
    }})
})