// Seleccionamos los elementos del DOM
const inputTarea = document.getElementById("tarea");
const btnAgregarTarea = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

// Función para agregar una tarea a la lista y guardarla en localStorage
btnAgregarTarea.addEventListener("click", () => {
  const tarea = inputTarea.value;
  console.log(tarea);
  if (tarea) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || []; // Recuperamos las tareas o inicializamos un array vacío
    tareas.push(tarea); // Agregamos la nueva tarea
    localStorage.setItem("tareas", JSON.stringify(tareas)); // Guardamos el array actualizado en localStorage
    mostrarTareas(); // Actualizamos la lista en pantalla
    inputTarea.value = ""; // Limpiamos el campo de input
  } else {
    alert("Escribe una tarea antes de agregarla.");
  }
});

// Función para mostrar las tareas almacenadas en la lista
function mostrarTareas() {
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  listaTareas.innerHTML = ""; // Limpiamos la lista antes de agregar nuevas tareas
  tareas.forEach((tarea, index) => {
    const li = document.createElement("li"); // Creamos un elemento <li> para cada tarea
    li.textContent = tarea; // Asignamos el texto de la tarea
    listaTareas.appendChild(li); // Agregamos la tarea a la lista visual
  });
}

// Mostramos las tareas almacenadas al cargar la página
window.onload = mostrarTareas;
