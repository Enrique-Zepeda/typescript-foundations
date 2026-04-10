(() => {
  // `type` es una palabra reservada de TypeScript que permite crear alias de tipos.
  // Se usa para describir la estructura que debe tener un valor,
  // por ejemplo un objeto.
  // Esto solo existe en TypeScript; en JavaScript no aparece.
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  // `flash` debe cumplir con la estructura definida en `Hero`
  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  // `superman` también usa el tipo `Hero`
  // `age` es opcional, pero aquí sí se incluye
  // `getName` también es opcional, y en este caso se define
  let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: ["Super Fuerza"],
    getName() {
      return this.name;
    },
  };
})();
