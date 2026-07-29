# Aprendiendo TypeScript

Proyecto de práctica para aprender los fundamentos de **TypeScript**, aplicados a través de tres mini ejercicios interactivos con **Tailwind CSS** como estilos.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

## 🛠️ Tecnologías

- **TypeScript** — lógica y tipado
- **Tailwind CSS** (vía CDN) — estilos
- **HTML5**

## 📂 Estructura del proyecto

```
├── index.html      # Página principal: Carrito de Compras
├── index2.html      # Página: Union Types (manejo de resultados/errores)
├── index3.html      # Página: Funciones Genéricas
├── script1.ts / .js  # Lógica del carrito de compras
├── script2.ts / .js  # Lógica de union types
├── script3.ts / .js  # Lógica de funciones genéricas
```

## 📄 Páginas

### 🛒 Carrito de Compras (`index.html`)
Formulario para agregar productos (nombre, cantidad, precio) a un carrito, con cálculo automático del total y opción de vaciar el carrito.

**Conceptos de TypeScript aplicados:**
- `interface` para definir la forma de un `Producto`
- Tipado de elementos del DOM (`as HTMLInputElement`, etc.)
- Arrays tipados (`Producto[]`)

### ⚠️ Union Types (`index2.html`)
Demostración de tipos unión para representar un resultado que puede ser exitoso o fallido.

**Conceptos de TypeScript aplicados:**
- `type` con union types (`|`)
- Discriminated unions (`exito: true` / `exito: false`)
- Type narrowing con `if`

### 🧩 Funciones Genéricas (`index3.html`)
Ejemplo de una función genérica que devuelve el primer elemento de un arreglo, probada con distintos tipos de datos (números, strings, objetos).

**Conceptos de TypeScript aplicados:**
- Genéricos (`<T>`)
- Inferencia de tipos automática
- `unknown` para manejo seguro de datos de tipo desconocido

## ▶️ Cómo ejecutar

1. Compila los archivos `.ts` a `.js`:
   ```bash
   tsc script1.ts
   tsc script2.ts
   tsc script3.ts
   ```
   O usa el modo watch para recompilar automáticamente al guardar:
   ```bash
   tsc --watch
   ```

2. Abre `index.html` en el navegador (no necesitas servidor, funciona como archivo local).

## 📌 Notas

- Tailwind se usa vía CDN (`cdn.tailwindcss.com`), pensado solo para desarrollo/prototipos — no para producción.
- Cada archivo `.ts` está comentado explicando el propósito de cada línea, como parte del proceso de aprendizaje.
