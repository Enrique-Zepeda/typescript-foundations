(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  // Para que una clase cumpla con una o más interfaces,
  // se utiliza la palabra reservada `implements`.
  class Mutant implements Xmen, Human {
    // La clase debe definir todas las propiedades
    // requeridas por las interfaces implementadas.
    public age: number;
    public name: string;
    public realName: string;

    // El constructor inicializa las propiedades de la clase
    constructor(age: number, name: string, realName: string) {
      this.age = age;
      this.name = name;
      this.realName = realName;
    }

    // La implementación del método debe respetar
    // la firma definida en la interfaz `Xmen`
    mutantPower(id: number): string {
      return `${this.name} ${this.realName}`;
    }
  }
})();
