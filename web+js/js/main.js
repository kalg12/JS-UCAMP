console.log("Mensaje desde la consola");
console.log(5 + 5);

//Voy a crear una funcion que me de un saludo
function saludarAPersona(nombre, edad) {
  alert("Hola " + nombre + "! 😎✌️ " + "no sabía que tienes " + edad + " años"); //Aquí estamos concatenando
}

function mostrarSumaConsola(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

//ES6 trajo una actualización para las funciones, ahora se le conocen como funciones flecha
const mostrarRestaConsola = (num1, num2, num3) => {
  console.log(num1 - num2 - num3);
};

//saludarAPersona("Kevin", 29);
//saludarAPersona("Esteban", 18);
//saludarAPersona("David", 19);
//saludarAPersona("Roberto", 20);
