(() => {
  // Las clases abstractas no sirven para crear instancias directamente.
  // Se usan como base para otras clases
  // y para definir una estructura común que las clases hijas deben seguir.
  abstract class Mutant {
    constructor(
      public name: string,
      public realName: string,
    ) {}
  }

  // `Xmen` hereda de `Mutant`
  class Xmen extends Mutant {
    salvarMundo() {
      return "Mundo a salvo";
    }
  }

  // `Villian` también hereda de `Mutant`
  class Villian extends Mutant {
    conquistarMundo() {
      return "Mundo conquistado";
    }
  }

  // Sí podemos crear instancias de las clases hijas
  const wolverine = new Xmen("Wolverine", "Logan");
  const magneto = new Villian("Magneto", "Magnus");

  console.log(wolverine.salvarMundo());
  console.log(magneto.conquistarMundo());

  // Esta función recibe cualquier objeto
  // que herede de `Mutant`
  const printName = (character: Mutant) => {
    console.log(character.name);
  };

  printName(wolverine);
})();
