(() => {
  // Función que recibe dos números y retorna su suma
  const addNumbers = (a: number, b: number): number => a + b;

  // Función que recibe un string y retorna otro string
  const greet = (name: string): string => `Hola ${name}`;

  // Función sin parámetros que retorna un string
  const saveTheWorld = (): string => `El mundo esta Salvado`;

  // `Function` permite guardar cualquier función,
  // pero es muy genérico y pierde parte del tipado estricto.
  let myFunction: Function;

  // Ejemplos más estrictos de tipado de funciones:
  // let myFunction: (y: number, z: number) => number;
  // let myFunction: (y: string) => string;
  // let myFunction: () => string;

  // Esto daría error porque `myFunction` debe ser una función
  // myFunction = 10;
  // console.log(myFunction);

  // Ahora `myFunction` apunta a una función que suma dos números
  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  // Ahora `myFunction` apunta a una función que saluda
  myFunction = greet;
  console.log(greet("Kike"));

  // Ahora `myFunction` apunta a una función sin parámetros
  myFunction = saveTheWorld;
  console.log(saveTheWorld());
})();
