(() => {
  // Una interfaz también puede definir la firma de una función
  // En este caso, describe una función que recibe dos números
  // y retorna un número
  interface AddTwoNumbers {
    (a: number, b: number): number;
  }

  // Declaramos una variable que debe cumplir con esa firma
  let addNumberFunction: AddTwoNumbers;

  // La función asignada debe respetar:
  // - recibir dos parámetros (a, b)
  // - ambos de tipo number
  // - retornar un number
  addNumberFunction = (a: number, b: number) => {
    return a + b;
  };
})();
