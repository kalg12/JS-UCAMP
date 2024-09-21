console.log("Hola ucamp");

document.getElementById("cualquierNombre").innerText =
  "Ahora con Javascript he modificado este H1";

/**
 * The function `cambiarNombre` changes the text content of an element with the id "cualquierNombre" to
 * "Celso".
 */
const cambiarNombre = () => {
  document.getElementById("cualquierNombre").innerText = "Celso";
};

//Insertando HTML
const agregandoHtml = () => {
  document.getElementById("cualquierNombre").innerHTML = "<h3>UCAMP</h3>";
};

document.getElementById("miBoton").addEventListener("click", function () {
  alert("¡Botón clickeado!");
});

//Tienda en línea - lógica

const agregarProducto = () => {
  document.getElementById("cantidadCarrito").innerText = "1";
};

//Manipulacion de CSS a través del DOM con JS
const cambiarColor = () => {
  document.body.style.backgroundColor = "black";
  //Cambiame el color de la etiqueta de h1 a color blanco
  document.getElementById("cualquierNombre").style.color = "red";
};

//Cambiar o personalizar CSS mediante DOM
const cambiarTamanioLetra = () => {
  document
    .getElementById("miTiendaTitulo")
    .classList.add("personalizacionMiTienda");
};

//Crear elementos con el DOM
const anadirLeyenda = () => {
  const parrafo = document.createElement("p");
  parrafo.innerHTML = "Somos la mejor tienda..";
  document.getElementById("leyendaMarca").appendChild(parrafo);
};
