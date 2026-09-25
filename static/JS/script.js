let articulo = document.querySelectorAll("#art1");
articulo.forEach(function (button) {
    button.addEventListener("click", function () {
        let articulos = document.getElementById("articulosCarro");
        articulos.innerText = parseInt(articulos.innerText) + 1;
    });
})

let articulo2 = document.querySelectorAll("#art2");
articulo2.forEach(function (button) {
    button.addEventListener("click", function () {
        let articulos = document.getElementById("articulosCarro");
        articulos.innerText = parseInt(articulos.innerText) + 1;
    });
})

let correo = document.getElementById("email");
let login = document.querySelectorAll("#login");
login.forEach(function (button) {
    button.addEventListener("click", function () {
        let correoIngresado = correo.value;
        alert(`Bienvenid@ ${correoIngresado}`)
    })
})

const contenedor = document.getElementById('cont');
const imagen = document.getElementById('img-1');
const video = document.getElementById('video');

// Al poner el mouse encima
contenedor.addEventListener('mouseenter', () => {
    imagen.style.display = 'none';   // Oculta la imagen
    video.style.display = 'block';   // Muestra el video
    video.play();                    // Reproduce el video
});

// Al quitar el mouse
contenedor.addEventListener('mouseleave', () => {
    video.pause();                   // Pausa el video
    video.currentTime = 0;           // (Opcional) Reinicia el video al inicio
    video.style.display = 'none';    // Oculta el video
    imagen.style.display = 'block';  // Muestra la imagen de nuevo
});