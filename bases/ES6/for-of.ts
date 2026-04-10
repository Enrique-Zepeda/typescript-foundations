(() => {
  // Tipo para definir la estructura de cada vengador
  type Avenger = {
    name: string;
    weapon: string;
  };

  // Objetos que cumplen con el tipo `Avenger`
  const ironman: Avenger = {
    name: "Ironman",
    weapon: "Armorsuit",
  };

  const capAmerica: Avenger = {
    name: "Capitan America",
    weapon: "Shield",
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  // Arreglo de objetos tipo `Avenger`
  const avengers: Avenger[] = [ironman, thor, capAmerica];

  // `for...of` se usa para recorrer los elementos de un arreglo
  // de forma directa, sin necesidad de manejar índices
  for (const avenger of avengers) {
    console.log(avenger.name);
    console.log(avenger.weapon);
  }
})();
