"use strict";
// Variable para almacenar los productos en el carrito, recibe un array de objetos de tipo Producto
const carrito = [];
// funcion para agregar un producto al carrito
// colocamos void para indicar que la función no retorna nada
function agregarAlCarrito() {
    // Obtenemos los valores de los inputs del formulario, en este caso colocamos as HTMLInputElement para indicar que el elemento es un input de tipo HTML
    const inputNombre = document.getElementById("nombre");
    const inputCantidad = document.getElementById("cantidad");
    const inputPrecio = document.getElementById("precio");
    // Obtenemos los valores de los inputs y los convertimos a los tipos correspondientes 
    // ya que el input devuelve un string, por lo que debemos convertirlo a number para cantidad y precio
    const nombre = inputNombre.value.trim();
    const cantidad = Number(inputCantidad.value);
    const precio = Number(inputPrecio.value);
    // Validamos que los valores no sean vacíos o inválidos
    if (nombre === "" || isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio <= 0) {
        alert("Por favor, ingrese valores válidos para el producto.");
        return;
    }
    // Agregamos el producto al carrito
    carrito.push({ nombre, precio, cantidad });
    inputNombre.value = "";
    inputCantidad.value = "";
    inputPrecio.value = "";
    renderCarrito();
}
;
function renderCarrito() {
    // Obtenemos los elementos del DOM donde se mostrará el carrito y el total
    const carritoDiv = document.getElementById("carrito");
    const totalCarritoEl = document.getElementById("totalCarrito");
    // Generamos el HTML para los productos en el carrito
    const items = carrito
        // map() para recorrer el array de productos y generar un string con el HTML de cada producto
        .map(
    // p es el parámetro que representa cada producto en el array carrito
    (p) => 
    // Generamos un string con el HTML de cada producto, mostrando el nombre, cantidad y precio formateado a 2 decimales
    `<li>${p.nombre} - Cantidad: ${p.cantidad} - Precio: $${p.precio.toFixed(2)}</li>`)
        // join("") para unir los strings generados por map() en un solo string, sin separadores
        .join("");
    // Asignamos el HTML generado al elemento del carrito en el DOM
    carritoDiv.innerHTML = `<ul>${items}</ul>`;
    // Calculamos el total del carrito usando reduce() para sumar el precio de cada producto multiplicado por su cantidad
    const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    // Asignamos el total al elemento del total en el DOM, formateado a 2 decimales
    totalCarritoEl.textContent = `Total: $${total.toFixed(2)}`;
}
