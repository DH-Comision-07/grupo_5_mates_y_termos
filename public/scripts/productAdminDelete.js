// Obtener el input y el enlace
let inPutDelete = document.getElementById('idInputDelete');
let linkDelete = document.getElementById('idDelete');
// Accion de cambio en el input
inPutDelete.addEventListener('input', () => {
    // Obtener el valor del input
    let linkValue = ("/admin/delete/" + inPutDelete.value);
    // Establecer el valor del atributo href del enlace
    linkDelete.href = linkValue;
});