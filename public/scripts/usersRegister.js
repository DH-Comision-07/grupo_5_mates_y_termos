window.addEventListener("load", function(){
    let formulario = document.querySelector("form.form--register");

    formulario.addEventListener("submit", function(e){
        // Vaciar las listas de errores previas
        document.querySelector("div.erroresName ul").innerHTML = '';
        document.querySelector("div.erroresLastName ul").innerHTML = '';
        document.querySelector("div.erroresEmail ul").innerHTML = '';
        document.querySelector("div.erroresPassword ul").innerHTML = '';

        let errores = [];
        let campoNombre = document.querySelector("input.name");

        errores = [];
        if(campoNombre.value == ""){
           
            errores.push("El campo Nombre tiene que estar completo");
        } else if(campoNombre.value.length < 2){
            errores.push("El campo Nombre tiene que tener al menos dos caracteres");
        }
        if (errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresName ul");
            for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>"+ errores[i] + "</li>" } 
        }

        let campoApellido = document.querySelector("input.lastName");
        errores = [];
        if(campoApellido.value == ""){
            errores.push("El campo Apellido tiene que estar completo");
        }else if(campoApellido.value.length < 2){
            errores.push("El campo Apellido tiene que tener al menos dos caracteres");
        }
        if (errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresLastName ul");
            for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>"+ errores[i] + "</li>" } 
        }
        
        let campoEmail = document.querySelector("input.email");

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errores = [];
        if(campoEmail.value == ""){
            errores.push("El campo Correo tiene que estar completo");
        } else if(!emailRegex.test(campoEmail.value)){
            errores.push("El campo Correo no es válido");
        } 

        if (errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresEmail ul");
            for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>"+ errores[i] + "</li>" } 
        }
    
        let campoPassword = document.querySelector("input.password");

        // Validación del campo Contraseña
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        errores = [];
        if(campoPassword.value == ""){
            errores.push("El campo Contraseña tiene que estar completo");
        } else if(!passwordRegex.test(campoPassword.value)){
            errores.push("La contraseña debe tener al menos 8 caracteres, incluyendo letras mayúsculas, minúsculas, un número y un carácter especial.");
        }

        // Mostrar errores de la Contraseña
        if (errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresPassword ul");
            ulErrores.innerHTML = ""; // Limpiar errores previos
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>"+ errores[i] + "</li>";
            }
        }
    })
})