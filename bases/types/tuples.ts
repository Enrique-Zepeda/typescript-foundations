(() => {
  // Una tupla es un arreglo con una cantidad fija de elementos donde cada posición tiene un tipo específico.
  // En este caso:
  // posición 0 -> string
  // posición 1 -> number
  // posición 2 -> boolean
  const hero: [string, number, boolean] = ["Dr Strange", 100, true];

  // No acepta estos cambios porque cada posición debe respetar el tipo definido en la tupla
  // hero[0] = 50;
  // hero[1] = "Ironman";

  // Aquí sí los acepta porque se mantiene el orden y el tipo de cada posición
  hero[0] = "Ironman";
  hero[1] = 50;
  hero[2] = false;

  console.log(hero);
})();
