window.addEventListener("load", function(){
    let formulario = document.querySelector("form.form--login");

    formulario.addEventListener("submit", function(e){
        // Vaciar las listas de errores previas
        document.querySelector("div.erroresEmail ul").innerHTML = '';
        document.querySelector("div.erroresPassword ul").innerHTML = '';

        let errores = [];
        let campoEmail = document.querySelector("input.userEmail");

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

        let campoPassword = document.querySelector("input.passwordUser");
        errores = [];
        
        if(campoPassword.value == ""){
            errores.push("El campo Contraseña tiene que estar completo");
        } else if(!passwordRegex.test(campoPassword.value)){
            errores.push("La contraseña debe tener al menos 8 caracteres, incluyendo letras mayúsculas, minúsculas, un número y un carácter especial.");
        

        if (errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.erroresPassword ul");
            ulErrores.innerHTML = ""; // Limpiar errores previos
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>"+ errores[i] + "</li>";
            }
        }}
    })
    })
