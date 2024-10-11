// Seleccionamos los elementos del DOM
const btnGuardarUsuario = document.getElementById("guardarUsuario");
const btnMostrarUsuario = document.getElementById("mostrarUsuario");
const resultado = document.getElementById("resultado");

// Función para guardar el objeto usuario en localStorage
btnGuardarUsuario.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;

  console.log(nombre);
  console.log(edad);

  //Hacemos una validación de los datos
  if (nombre && edad) {
    const usuario = { nombre, edad }; // Creamos un objeto con el nombre y la edad
    localStorage.setItem("usuario", JSON.stringify(usuario)); // Convertimos el objeto a JSON y lo guardamos en localStorage
    alert("Usuario guardado correctamente");
  } else {
    alert("Por favor, completa toda la información.");
  }
});

// Función para mostrar el objeto usuario almacenado
btnMostrarUsuario.addEventListener("click", () => {
  const usuarioGuardado = localStorage.getItem("usuario");
  console.log(usuarioGuardado);
  console.log(JSON.parse(usuarioGuardado));

  //Si esto es TRUE se ejecuta lo siguiente
  if (usuarioGuardado) {
    const usuario = JSON.parse(usuarioGuardado); // Convertimos de JSON a objeto
    resultado.textContent = `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`; // Mostramos los datos en la página
  } else {
    alert("No hay ningún usuario almacenado.");
  }
});
