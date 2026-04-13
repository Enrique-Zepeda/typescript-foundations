(() => {
  // `interface` sirve para definir la estructura que debe tener un objeto.
  // Es muy parecida a `type`, pero una diferencia importante
  // es que las interfaces pueden extenderse con más facilidad
  // y son muy comunes al trabajar con objetos, clases y respuestas de APIs.
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  // `flash` debe cumplir con la estructura de la interfaz `Hero`
  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  // `superman` también cumple con la interfaz `Hero`
  // `age` es opcional y aquí sí se incluye
  // `getName` también es opcional y aquí se define
  let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: ["Super Fuerza"],
    getName() {
      return this.name;
    },
  };
})();
