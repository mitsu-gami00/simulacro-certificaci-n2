# Biblioteca Horizonte

[English version below](#biblioteca-horizonte-english-version)

## Descripción

**Biblioteca Horizonte** es un sitio web estático que presenta una biblioteca virtual. La página muestra categorías temáticas, una sección de presentación con imagen y video, y una selección de libros recomendados. También incluye un campo para ingresar un correo, un botón de ingreso y un contador de libros seleccionados.

Este proyecto utiliza HTML, CSS y JavaScript del lado del cliente. Según los archivos incluidos, no requiere un servidor ni un proceso de compilación para abrir la página localmente.

## Funcionalidades implementadas

- **Categorías temáticas:** muestra seis categorías: Novelas, Ciencias, Historia, Tecnología, Arte e Infantil.
- **Libros recomendados:** presenta *Cien años de soledad* de Gabriel García Márquez, *Sapiens* de Yuval Noah Harari y *El principito* de Antoine de Saint-Exupéry.
- **Contador de selección:** cada botón `+` de los libros recomendados incrementa el contador visible de libros seleccionados.
- **Mensaje de bienvenida:** el botón **Ingresar** muestra una alerta con el texto ingresado en el campo de correo.
- **Imagen y video al pasar el cursor:** en el área de presentación, al colocar el cursor sobre el contenedor se oculta la imagen y se reproduce el video; al retirar el cursor, el video se pausa, vuelve al inicio y se muestra la imagen.
- **Diseño adaptable mediante Flexbox:** las hojas de estilo usan contenedores flexibles y permiten que varias secciones se ajusten cuando cambia el espacio disponible.

> **Alcance actual:** el botón de ingreso no realiza autenticación real ni valida una cuenta. El contador es una interacción visual en la página y no guarda selecciones de forma persistente. Los enlaces «Ver Más...» tienen `href="#"`, por lo que no dirigen a fichas detalladas de los libros.

## Tecnologías

- **HTML5:** estructura y contenido de la página.
- **CSS3:** estilos y distribución visual, principalmente con Flexbox.
- **JavaScript:** eventos para el contador, la alerta de bienvenida y la interacción de imagen/video.
- **Recursos multimedia locales:** imágenes en PNG, JPG y WebP, y un video MP4.

No se identifican dependencias de frameworks o paquetes externos en los archivos proporcionados.

## Estructura del proyecto

```text
simulacro-certificaci-n2-main/
├── index.html
└── static/
    ├── JS/
    │   └── script.js
    ├── css/
    │   └── style.css
    ├── images/
    │   ├── Biblioteca.jpg
    │   ├── Ciencias.png
    │   ├── cien.webp
    │   ├── laptop.png
    │   ├── libros.png
    │   ├── logo.png
    │   ├── oso.png
    │   ├── paleta.png
    │   ├── principito.jpg
    │   ├── sapiens.webp
    │   └── teatro.png
    └── video/
        └── biblioVideo.mp4
```

También se incluye el archivo `.gitattributes` en la raíz. Los nombres y rutas anteriores corresponden a los archivos encontrados en el ZIP revisado.

## Cómo ejecutar el proyecto

### Opción 1: abrir directamente

1. Descarga o descomprime el proyecto.
2. Mantén la estructura de carpetas `static/` tal como está.
3. Abre `index.html` en un navegador moderno.

### Opción 2: usar Visual Studio Code

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Abre `index.html` en el navegador. Si tienes instalada una extensión de servidor local, también puedes usarla para servir la carpeta.

No se encontró un `package.json`, archivo de dependencias ni configuración de compilación en el archivo ZIP, así que no se documentan comandos de instalación con npm ni pasos de compilación.

## Archivos principales

- `index.html`: define la estructura, las categorías, los libros recomendados y las referencias a CSS, JavaScript e imágenes/video.
- `static/css/style.css`: contiene los estilos de la página, la navegación, las categorías, la sección principal y las recomendaciones.
- `static/JS/script.js`: implementa el contador, la alerta del botón de ingreso y el comportamiento al pasar el cursor por el área multimedia.
- `static/images/`: contiene los recursos gráficos usados por la interfaz.
- `static/video/biblioVideo.mp4`: video mostrado en el área de presentación al pasar el cursor.

## Limitaciones conocidas

- El ingreso es una demostración visual: no hay autenticación, registro ni conexión a una base de datos implementados en los archivos revisados.
- Las selecciones no se guardan al recargar la página y no se muestra una lista de títulos seleccionados; solo aumenta el contador.
- Los enlaces «Ver Más...» son marcadores de posición.
- El comportamiento multimedia depende de que el navegador pueda cargar el archivo MP4 local.
- No se encontró una suite de pruebas automatizadas ni instrucciones de despliegue en el ZIP.

## Posibles mejoras futuras

Estas son sugerencias, no funcionalidades actualmente implementadas:

- Validar el formato del correo antes de mostrar el mensaje de bienvenida.
- Cambiar los botones `+` para asociar cada selección a un libro concreto y permitir quitarlo.
- Crear páginas o ventanas de detalle para los enlaces «Ver Más...».
- Añadir persistencia de las selecciones si el objetivo del proyecto lo requiere.
- Mejorar las etiquetas accesibles y comprobar la experiencia en distintos tamaños de pantalla.

## Autoría

Ignacio Orellana, Estudiante de programación
chrisorellanaespinoza@gmail.com

---

# Biblioteca Horizonte (English version)

## Overview

**Biblioteca Horizonte** is a static website presenting a virtual library. The page displays subject categories, an introduction area with an image and video, and a selection of recommended books. It also includes an email input, a sign-in button, and a counter for selected books.

The project uses client-side HTML, CSS, and JavaScript. Based on the supplied files, no server or build step is required to open the page locally.

## Implemented features

- **Subject categories:** displays six categories: Novels, Science, History, Technology, Art, and Children’s.
- **Recommended books:** lists *One Hundred Years of Solitude* by Gabriel García Márquez, *Sapiens* by Yuval Noah Harari, and *The Little Prince* by Antoine de Saint-Exupéry.
- **Selection counter:** clicking a `+` button for a recommended book increments the visible selected-books counter.
- **Welcome message:** the **Ingresar** button displays an alert containing the text entered in the email field.
- **Hover image/video interaction:** hovering over the introduction media container hides the image and plays the video. Moving the cursor away pauses and resets the video, then displays the image again.
- **Flexbox layout:** the CSS uses flexible containers so sections can adapt to available space.

> **Current scope:** the sign-in button does not perform real authentication or validate an account. The counter is a visual page interaction and does not persist selections. The “Ver Más...” links use `href="#"` and do not open detailed book pages.

## Technologies

- **HTML5:** page structure and content.
- **CSS3:** styling and layout, primarily with Flexbox.
- **JavaScript:** event handling for the counter, welcome alert, and image/video interaction.
- **Local media assets:** PNG, JPG, and WebP images, plus an MP4 video.

No external framework or package dependencies were identified in the supplied files.

## Project structure

```text
simulacro-certificaci-n2-main/
├── index.html
└── static/
    ├── JS/
    │   └── script.js
    ├── css/
    │   └── style.css
    ├── images/
    │   ├── Biblioteca.jpg
    │   ├── Ciencias.png
    │   ├── cien.webp
    │   ├── laptop.png
    │   ├── libros.png
    │   ├── logo.png
    │   ├── oso.png
    │   ├── paleta.png
    │   ├── principito.jpg
    │   ├── sapiens.webp
    │   └── teatro.png
    └── video/
        └── biblioVideo.mp4
```

The root also contains a `.gitattributes` file. The paths above reflect the files found in the reviewed ZIP archive.

## How to run

### Option 1: open the file directly

1. Download or extract the project.
2. Keep the `static/` directory structure unchanged.
3. Open `index.html` in a modern web browser.

### Option 2: use Visual Studio Code

1. Open the project folder in Visual Studio Code.
2. Open `index.html` in your browser. If you have a local-server extension installed, you can also use it to serve the folder.

No `package.json`, dependency manifest, or build configuration was found in the ZIP, so no npm installation or build commands are documented.

## Main files

- `index.html`: defines the page structure, categories, recommended books, and references to CSS, JavaScript, images, and video.
- `static/css/style.css`: contains the page styles, navigation, category layout, introduction section, and recommendations.
- `static/JS/script.js`: implements the counter, sign-in alert, and hover behavior for the media area.
- `static/images/`: contains graphical assets used by the interface.
- `static/video/biblioVideo.mp4`: video displayed in the introduction area on hover.

## Known limitations

- Sign-in is a visual demonstration; the reviewed files do not implement authentication, registration, or a database connection.
- Selections are not saved after reloading, and no list of selected titles is displayed; only the counter increases.
- “Ver Más...” links are placeholders.
- Media playback depends on the browser being able to load the local MP4 file.
- No automated test suite or deployment instructions were found in the ZIP.

## Potential future improvements

These are suggestions, not existing features:

- Validate the email format before showing the welcome message.
- Associate each `+` button with a specific book and allow users to remove selections.
- Add detail pages or dialogs for the “Ver Más...” links.
- Add persistent selection storage if required by the project goals.
- Improve accessibility labels and test the layout at different screen sizes.

## Author

Ignacio Orellana, Programation student
chrisorellanaespinoza@gmail.com
