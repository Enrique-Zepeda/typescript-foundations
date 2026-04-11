(() => {
  class Avenger {
    constructor(
      // Propiedades públicas accesibles desde fuera de la clase
      public name: string,
      public realName: string,
    ) {
      console.log("Constructor Avenger llamado");
    }

    // `protected` permite usar este método
    // dentro de esta clase y en sus clases hijas,
    // pero no desde fuera
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  // `Xmen` hereda de `Avenger`
  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean,
    ) {
      // `super()` llama al constructor de la clase padre
      // y debe ejecutarse antes de usar `this`
      super(name, realName);

      console.log("Constructor Xmen llamado");
    }

    // Getter: permite leer la propiedad como si fuera un atributo
    public get fullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    // Setter: permite asignar un valor como si fuera un atributo,
    // pero ejecutando lógica interna
    public set fullName(name: string) {
      // Los setters solo reciben un parámetro
      // y normalmente se usan para validar o transformar datos
      if (name.length < 3) {
        throw new Error("El nombre debe ser mayor a 3 letras");
      }

      this.name = name;
    }

    // Método propio de la clase hija
    getFullNameFromXmen() {
      return `${this.name} ${this.realName}`;
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  // Usamos el getter
  console.log(wolverine.fullName);

  // Usamos el setter
  wolverine.fullName = "Kike";

  // Volvemos a usar el getter
  console.log(wolverine.fullName);
})();
