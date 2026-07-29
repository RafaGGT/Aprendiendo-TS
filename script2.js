"use strict";
const contenedor = document.getElementById("contenedorMensaje");
const texto = document.getElementById("mensaje");
const ok = { exito: true, datos: "Producto guardado" };
const fail = { exito: false, error: "No se pudo conectar" };
function mostrarResultado(r) {
    contenedor.classList.remove("hidden");
    if (r.exito === true) {
        texto.textContent = `Éxito: ${r.datos}`;
    }
    else {
        texto.textContent = `Error: ${r.error}`;
    }
}
