(() => {
  class Avenger {
    // Las propiedades estáticas pertenecen a la clase,
    // no a las instancias creadas con `new`
    static avgAge: number = 35;

    // Los métodos estáticos también pertenecen a la clase.
    // Se acceden con `Avenger.getAvgAge()`
    static getAvgAge() {
      return this.name; // aquí `this` hace referencia a la clase `Avenger`
    }

    constructor(
      // `private` hace que la propiedad solo pueda usarse dentro de la clase
      private name: string,

      // `private` también limita el acceso a la clase
      private team: string,

      // `public` permite acceder a la propiedad desde fuera de la clase
      public realName?: string,

      // Parámetro normal del constructor con valor por defecto
      avgAge: number = 55,
    ) {
      // Modificamos la propiedad estática de la clase
      Avenger.avgAge = avgAge;
    }

    // Método de instancia
    // Se puede usar con objetos creados a partir de la clase
    bio() {
      return `${this.name} ${this.team}`;
    }
  }

  // Creamos una instancia de la clase `Avenger`
  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");

  console.log(antman);

  // Accedemos a la propiedad estática desde la clase
  console.log(Avenger.avgAge); // 55

  // Llamamos a un método de instancia
  console.log(antman.bio());

  // Llamamos a un método estático
  console.log(Avenger.getAvgAge()); // "Avenger"
})();
