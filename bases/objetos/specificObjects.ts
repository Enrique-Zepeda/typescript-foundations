(() => {
  // En los objetos, el orden de las propiedades no importa.
  // Lo importante en TypeScript es que el objeto cumpla con la estructura definida en su tipo.
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

  // Podemos reasignar `flash` a otro objeto
  // siempre que mantenga la misma estructura:
  // - name obligatorio
  // - age opcional
  // - powers obligatorio
  // - getName opcional
  flash = {
    name: "Clark Kent",
    // `age` no se coloca aquí y no hay problema porque fue definida como opcional con `?`
    // age: 60,
    powers: ["Super Fuerza"],

    // Método opcional que retorna el nombre del héroe
    getName() {
      return this.name;
    },
  };

  // Se imprime el resultado del método `getName`
  console.log(flash.getName());
})();
