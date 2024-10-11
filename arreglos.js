//En un arreglo podemos combinar diferentes tipos de datos
const caja = ["corazón", "circulo", "estrella", "triángulo"];

console.log(caja);

//Podemos imprimir un elemento de nuestra caja
console.log(caja[3]);

//Podemos descubrir con una función cuánto es el tamaño de un arreglo
console.log(
  `El tamaño de nuestro arreglo es de: ${caja.length} tipos de datos`
);

//Reto: Imprimir cada elemento del arreglo caja
console.log(caja[0]);
console.log(caja[1]);
console.log(caja[2]);
console.log(caja[3]);

//Aquí vamos a remplazar cada console.log usando un método llamado foreach

console.log("----------");

//Push nos sirve para agregar elementos a nuestro arreglo en este caja
caja.push("Marco", "😎", "David");

//Podemos elimnar al último elemento de nuestro arreglo
caja.pop();

//Podemos descubrir con una función cuánto es el tamaño de un arreglo
console.log(
  `El tamaño de nuestro arreglo es de: ${caja.length} tipos de datos`
);

//Podemos eliminar un elemento específico del arreglo
caja.splice(1, 5); //Esto elimina el elemento en la posición 8

/* The code `caja.forEach((cadaElementoDeMiCaja) => { console.log(cadaElementoDeMiCaja); });` is using
the `forEach` method to iterate over each element in the `caja` array. For each element, it will
execute the arrow function `(cadaElementoDeMiCaja) => { console.log(cadaElementoDeMiCaja); }`, which
simply logs each element to the console. This allows you to print out each element of the `caja`
array without explicitly specifying the index of each element. */
caja.forEach((cadaElementoDeMiCaja) => {
  console.log(cadaElementoDeMiCaja);
});

console.log(
  `Después de usar el método splice tengo ahora: ${caja.length} tipos de datos`
);

console.log(caja);
