//  Los decoradores no son mas que simples funciones
// este es un decorador que se le aplica a la clase la cual retorna el constructor de la misma
function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

// decorador para evitar expancion de una clase
const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// factory decoration
function CheckValidPokemonId() {
  return function (target: any, propetyKey: string, descriptor: PropertyDescriptor) {
    // console.log({ target, propetyKey, descriptor });
    // descriptor.value = () => console.log("hola mundo"); // aqui vemos el clg envez del la funcion del savepokemon
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("EL id del pokemon debe de estar entre 1 y 800");
      } else {
        return originalMethod(id);
      }
    };
  };
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propetyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return "Kike";
      },
      set(this, val) {
        // console.log(this, val);
        Object.defineProperty(this, propetyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

// @printToConsole
@bloquearPrototipo
@printToConsoleConditional(false) // se puede poner false
export class Pokemon {
  @readOnly() //true or false
  public publicApi: string = "https://pokeapi.co/";
  constructor(public name: string) {}

  @CheckValidPokemonId() // este se tiene que ejecutar porque son dos funciones
  savePokemonToDB(id: number) {
    console.log(`Pkemon save at DB ${id}`);
  }
}
