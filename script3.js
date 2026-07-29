"use strict";
// Función genérica que devuelve el primer elemento de un arreglo
function primerElemento(arr) {
    // Retorna el primer elemento del arreglo, que es de tipo T
    return arr[0];
}
// Definición de un arreglo de objetos Producto
const productos = [
    { nombre: "Mouse", precio: 15000 },
    { nombre: "Teclado", precio: 25000 },
    { nombre: "Monitor", precio: 50000 }
];
// Uso de la función genérica con el arreglo de objetos Producto
const primero = primerElemento(productos);
const numeros = primerElemento([1, 2, 3]);
const letras = primerElemento(["a", "b", "c"]);
const resultadoDiv = document.querySelector(".resultado");
function mostrar(valor) {
    resultadoDiv.classList.remove("hidden");
    // JSON.stringify(valor, null, 2) convierte el valor a una cadena JSON con una sangría de 2 espacios para mejorar la legibilidad
    // valor es de tipo unknown, por lo que puede ser cualquier tipo de dato, y se muestra en un elemento <pre> para mantener el formato}
    // null indica que no se utiliza una función de reemplazo y 2 indica el número de espacios para la sangría
    // 2 espacios de sangría hacen que la salida sea más legible, especialmente para objetos y arreglos anidados
    resultadoDiv.innerHTML = `<pre class="mx-5 text-sm text-center text-cyan-300 bg-slate-950 rounded-lg p-4 overflow-x-auto">${JSON.stringify(valor, null, 2)}</pre>`;
}
