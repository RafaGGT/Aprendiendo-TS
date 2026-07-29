// con type creamos un dato de valor personalizado 
// en este caso un tipo de dato llamado Resultado que puede ser un objeto con exito true y datos string o un objeto con exito false y error string
type Resultado =
// para indicar que puede ser uno u otro usamos el operador | (pipe)
// en este caso el tipo Resultado puede ser un objeto con exito true y datos string 
// o un objeto con exito false y error string
  | { exito: true; datos: string }
  | { exito: false; error: string };


const contenedor = document.getElementById("contenedorMensaje") as HTMLDivElement;
const texto = document.getElementById("mensaje") as HTMLParagraphElement;
const ok: Resultado = { exito: true, datos: "Producto guardado" };
const fail: Resultado = { exito: false, error: "No se pudo conectar" };


const resultadoDiv = document.querySelector(".resultado") as HTMLDivElement;

function mostrar(valor: unknown): void {
  resultadoDiv.classList.remove("hidden");
  resultadoDiv.innerHTML = `<p class="text-white text-center text-lg">${JSON.stringify(valor)}</p>`;
}
