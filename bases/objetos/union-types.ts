(() => {
  // Los union types permiten que una variable pueda almacenar más de un tipo de dato
  // usando el operador `|`
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  // `myCustomVariable` puede ser:
  // - string
  // - number
  // - Hero
  let myCustomVariable: string | number | Hero = "Kike";

  // Aquí la variable guarda un string
  console.log(myCustomVariable);
  console.log(typeof myCustomVariable); // string

  // Ahora guarda un number
  myCustomVariable = 20;
  console.log(typeof myCustomVariable); // number

  // Ahora guarda un objeto con la estructura de `Hero`
  myCustomVariable = {
    name: "Bruce",
    age: 43,
    powers: [1],
  };

  // En JavaScript, `typeof` para objetos devuelve "object"
  console.log(typeof myCustomVariable); // object
})();
