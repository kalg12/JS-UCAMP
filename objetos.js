//POO = Programación Orientada a Objetos
// Objetos

let persona = {
  nombre: "Kevin",
  edad: 29,
  isCoach: true,
  hobbies: {
    deporte: "Futbol",
    videojuego: "Fifa",
  },
  cursos: ["DWF", "Matemáticas", "Español"],
  saludar: function (nombre) {
    console.log("Hola " + this.edad);
  },
  gritar: () => {
    console.log("Ahhh!!!");
  },
};
console.log(typeof persona);
console.log(typeof persona.nombre);
console.log(typeof persona.edad);
console.log(typeof persona.isCoach);
console.log(typeof persona.hobbies);
console.log(typeof persona.cursos);
persona.saludar("Kevin Luciano");
persona.gritar();
