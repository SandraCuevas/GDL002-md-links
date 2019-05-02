# Markdown Links
En este proyecto desarrollamos una libreria con node.js para poder extraer los links de un archivo de tipo MARKDOWN, a continuación describiremos a que nos referimos.

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.


## Introducción
[Diagrama de Flujo](https://www.lucidchart.com/invitations/accept/76f64b0f-c856-4625-9dad-910036d75e7b)


![diagrama](https://i.postimg.cc/zGb1dKJV/Ruta-md-Links.png)


[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa
que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el
sistema archivos, con el entorno (_process_, _env_, _stdin/stdout/stderr_), ...




#### Ejemplo
En esta primera iteración podras llevar ingresar la ruta de tu archivo a explorar, para extraer links
```js
const mdLinks = require("md-links");

// Caso 1 .- Ruta relativa sin options
mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

