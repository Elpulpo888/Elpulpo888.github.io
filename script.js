// Función para obtener la fecha actual en formato YYYY-MM-DD
function obtenerFechaActual() {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Añadimos 1 porque los meses empiezan desde 0
    const dia = String(fecha.getDate()).padStart(2, '0'); // Asegura que el día tenga 2 dígitos

    // Asigna la fecha al campo de entrada
    document.getElementById('fecha').value = `${año}-${mes}-${dia}`;
}

// Función para obtener la semana actual
function obtenerSemanaActual() {
    const fecha = new Date();
    const inicioAno = new Date(fecha.getFullYear(), 0, 1);
    const diasTranscurridos = Math.floor((fecha - inicioAno) / (24 * 60 * 60 * 1000));
    const semana = Math.ceil((diasTranscurridos + 1) / 7);

    // Asigna la semana al campo de entrada
    document.getElementById('semana').value = semana;
}

// Función para obtener la hora actual en formato HH:MM
function obtenerHoraActual() {
    const fecha = new Date();
    const horas = String(fecha.getHours()).padStart(2, '0'); // Asegura que las horas tengan 2 dígitos
    const minutos = String(fecha.getMinutes()).padStart(2, '0'); // Asegura que los minutos tengan 2 dígitos

    // Asigna la hora al campo de entrada
    document.getElementById('hora').value = `${horas}:${minutos}`;
}

// Función para habilitar el campo 'Otros' cuando se selecciona la opción 'Otros'
function activarCampo(campo) {
    let campoSeleccionado = document.getElementById(campo).value;

    // Dependiendo del campo, habilitamos o deshabilitamos el campo correspondiente para 'Otros'
    if (campoSeleccionado === "Otros" || campoSeleccionado === "Otro") {
        document.getElementById(campo + "-otros").disabled = false;
    } else {
        document.getElementById(campo + "-otros").disabled = true;
    }
}

// Llamamos a las funciones cuando la página carga
window.onload = function() {
    obtenerFechaActual();  // Rellenar automáticamente la fecha
    obtenerSemanaActual(); // Rellenar automáticamente la semana
    obtenerHoraActual();   // Rellenar automáticamente la hora
};
