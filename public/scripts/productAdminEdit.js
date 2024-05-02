 // Obtener el input y el enlace
 let inputEdit = document.getElementById('idInputEdit');
 let linkEdit = document.getElementById('idEdit');
 // Accion de cambio en el input
 inputEdit.addEventListener('input', () => {
     // Obtener el valor del input
     let linkValue = ("/admin/update/" + inputEdit.value);
     // Establecer el valor del atributo href del enlace
     linkEdit.href = linkValue;
 });