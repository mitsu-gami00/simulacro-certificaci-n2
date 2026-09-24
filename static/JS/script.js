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

let imagen = document.querySelector("#img-1");

imagen.addEventListener("mouseover", function () {
    imagen.src = "static/images/comida-mexicana2.jpg";
});
    
imagen.addEventListener("mouseout", function () {
    imagen.src = "static/images/comida-mexicana.jpg";
});