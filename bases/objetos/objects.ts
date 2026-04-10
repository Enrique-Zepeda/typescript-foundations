(() => {
  // TypeScript infiere automáticamente la estructura del objeto `flash` a partir de sus propiedades iniciales.
  // En este caso, infiere:
  // - name: string
  // - age: number
  // - powers: string[]
  let flash = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  // Podemos reasignar el objeto a otro valor siempre que mantenga la misma estructura inferida.
  flash = {
    name: "Clark Kent",
    age: 60,
    powers: ["Super Fuerza"],

    // Esto daría error porque `getNombres` no forma parte de la estructura original inferida para `flash`.
    // Si quisiéramos agregarlo, tendríamos que definir el tipo desde el inicio.
    // getNombres() {
    //   return this.name;
    // },
  };

  console.log(flash);
})();
