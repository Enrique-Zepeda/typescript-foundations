(() => {
  // Un constructor privado impide crear instancias directamente con `new`
  // desde fuera de la clase.
  // Esto se usa para controlar cómo y cuántas instancias se crean.
  // Aquí se aplica el patrón Singleton.
  class Apocalipsis {
    // Propiedad estática que guardará la única instancia de la clase
    static instance: Apocalipsis;

    // `private constructor` significa que solo la misma clase
    // puede crear una instancia de sí misma
    private constructor(public name: string) {}

    // Método estático que controla el acceso a la única instancia
    static callApocalipsis(): Apocalipsis {
      // Si todavía no existe una instancia, la crea
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis... el único");
      }

      // Siempre devuelve la misma instancia
      return Apocalipsis.instance;
    }

    // Método de instancia para cambiar el nombre
    changeName(newName: string): void {
      this.name = newName;
    }
  }

  // Aunque llamamos varias veces al método,
  // todas las variables apuntan al mismo objeto
  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  // Cambiamos el nombre desde una referencia
  apocalipsis1.changeName("Kike");

  // Esto daría error porque el constructor es privado
  // const apocalipsis1 = new Apocalipsis("Soy Apocalipsis1... el único");
  // const apocalipsis2 = new Apocalipsis("Soy Apocalipsis2... el único");
  // const apocalipsis3 = new Apocalipsis("Soy Apocalipsis3... el único");

  // Las tres variables muestran el mismo objeto actualizado
  console.log(apocalipsis1);
  console.log(apocalipsis2);
  console.log(apocalipsis3);
})();
