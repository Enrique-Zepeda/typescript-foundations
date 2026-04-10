(() => {
  // Clase base `Avenger`
  class Avenger {
    // El constructor se ejecuta al crear una nueva instancia
    // y recibe valores por defecto por si no se envían argumentos
    constructor(name = "No name", power = 0) {
      // Asignamos los valores recibidos a las propiedades del objeto
      this.name = name;
      this.power = power;
    }
  }

  // Clase hija que hereda de `Avenger`
  class FlyingAvenger extends Avenger {
    constructor(name, power) {
      // `super()` llama al constructor de la clase padre
      // para inicializar las propiedades heredadas
      super(name, power);

      // Propiedad adicional propia de esta clase hija
      this.flying = true;
    }
  }

  // Creamos una instancia de la clase `Avenger`
  const hulk = new Avenger("Hulk", 9001);

  // Creamos una instancia de la clase hija `FlyingAvenger`
  const falcon = new FlyingAvenger("Falcon", 50);

  console.log(hulk);
  console.log(falcon);
})();
