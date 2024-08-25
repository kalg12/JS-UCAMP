let numeroUno = 15;
let numeroDos = 5;
let miEdad = 17;

let resultadoSuma = numeroUno + numeroDos;
console.log(resultadoSuma);

let resultadoMultiplicacion = numeroUno * 2;
console.log(resultadoMultiplicacion);

//Logicos:  &, ||, !
// Comparación: <, >, <= , >=, ==, ===, !=, !==,

if (numeroUno > numeroDos) {
  // TRUE
  console.log("Número uno es mayor que la variable número dos");
}

if (miEdad >= 18) {
  console.log("Usted es mayor de edad");
} else {
  console.log("Usted es menor de edad");
}

// El caso de los inicios de sesión
let usuario = "ucamp";
let contraseña = "ucamp2024";

if (usuario === "ucamp" && contraseña === "ucamp2024") {
  console.log("Has entrado correctacmente");
} else {
  console.log("Usuario o contraseña incorrectos");
}
