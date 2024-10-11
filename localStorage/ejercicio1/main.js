// Seleccionamos los elementos del DOM
const inputNombre = document.getElementById("nombre");
const btnGuardar = document.getElementById("guardar");
const btnMostrar = document.getElementById("mostrar");
const btnEliminar = document.getElementById("eliminar");
const saludo = document.getElementById("saludo");

// Función para guardar el nombre en localStorage
btnGuardar.addEventListener("click", () => {
  const nombre = inputNombre.value;
  console.log("El dato capturado fue: " + nombre);
  if (nombre) {
    localStorage.setItem("nombre", nombre); // Guardamos en localStorage
    alert("Nombre guardado correctamente");
  } else {
    alert("Por favor, introduce un nombre.");
  }
});

// Función para mostrar el nombre almacenado
btnMostrar.addEventListener("click", () => {
  const nombreGuardado = localStorage.getItem("nombre");
  alert("El nombre guardado es:" + nombreGuardado);
  if (nombreGuardado) {
    saludo.textContent = `¡Hola, ${nombreGuardado}!`;
  } else {
    saludo.textContent = "No hay ningún nombre almacenado.";
  }
});

// Función para eliminar el nombre almacenado
btnEliminar.addEventListener("click", () => {
  localStorage.removeItem("nombre");
  saludo.textContent = "";
  alert("Nombre eliminado correctamente");
});
