(() => {
  // En los objetos, el orden de las propiedades no importa. Lo importante en TypeScript es que el objeto cumpla
  // con la estructura definida en su tipo.
  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  // `flash` puede reasignarse a otro objeto
  // siempre que respete la misma estructura:
  // - `name` es obligatorio
  // - `age` es opcional
  // - `powers` es obligatorio
  // - `getName` es opcional
  flash = {
    name: "Clark Kent",

    // No hay problema si `age` no se incluye,
    // porque fue definida como opcional con `?`
    // age: 60,

    powers: ["Super Fuerza"],

    // Método opcional que retorna el nombre del héroe
    getName() {
      return this.name;
    },
  };

  // Usamos optional chaining (`?.`) porque `getName`
  // es opcional y podría no existir.
  console.log(flash.getName?.());
})();
