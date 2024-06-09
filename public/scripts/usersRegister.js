window.addEventListener("load", function(){
    let formulario = document.querySelector("form.form--register");

    formulario.addEventListener("submit", function(e){
        let errores = [];
        let campoNombre = document.querySelector("input.main__form--inputs");

        if(campoNombre.value == ""){
            errores = [];
            errores.push("El campo Nombre tiene que estar completo");
        } else if(campoNombre.value.length < 3){
            errores.push("El campo Nombre tiene que tener al menos tres caracteres");
        }
        if (errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresName ul");
            for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>"+ errores[i] + "</li>" } 
        }
        let campoApellido = document.querySelector("input.lastName");

        if(campoApellido.value == ""){
            errores = [];
            errores.push("El campo Apellido tiene que estar completo");
        }
        if (errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresLastName ul");
            for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>"+ errores[i] + "</li>" } 
    }})
})