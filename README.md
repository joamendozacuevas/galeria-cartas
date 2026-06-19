# Galeria de cartas

Proyecto creado con React y Vite para la Tarea 1 de React. La aplicacion muestra una galeria de cartas usando componentes, props, listas con `.map()`, renderizado condicional y eventos.

## Link de publicacion

https://joamendozacuevas.github.io/galeria-cartas/

## Funcionalidades

- Renderiza 6 cartas desde un arreglo de objetos.
- Usa el componente `Carta` con props: `nombre`, `tipo`, `poder` y `emoji`.
- Recorre el arreglo `cartas` con `.map()` y asigna una `key` unica.
- Muestra la etiqueta `⚡ LEGENDARIA` solo cuando el poder de la carta es mayor a 80.
- Incluye un boton `Ver carta` que muestra un `alert` con el nombre de la carta elegida.
- Agrega un contador de likes por carta usando `useState`.
- Usa estilos propios en `App.css` e `index.css`.

## Tecnologias usadas

- React
- Vite
- CSS
- JavaScript

## Como ejecutar el proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Crear version de produccion:

```bash
npm run build
```

## Publicacion

El proyecto esta preparado para publicarse en GitHub Pages desde la rama `main` usando GitHub Actions. Cada vez que se suban cambios a `main`, se genera la carpeta `dist` y se publica automaticamente.
