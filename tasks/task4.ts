// Crear interfaces

// Interfaz para definir la estructura de un auto
// y validar el objeto que se envía como parámetro
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

// La función recibe un objeto que debe cumplir con la interfaz `Auto`
const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

// Objeto que cumple con la interfaz `Auto`
const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

// Interfaz con propiedades opcionales
// para permitir distintas combinaciones de datos
interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

// Objeto que cumple con la interfaz `Guason`
const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false,
};

// La función revisa si la propiedad opcional `reir` existe y es verdadera
const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Interfaz para definir la firma de una función
// que recibe un arreglo de strings y retorna un number
interface CiudadGoticaFn {
  (ciudadanos: string[]): number;
}

// Función que cumple con la interfaz `CiudadGoticaFn`
const ciudadGotica: CiudadGoticaFn = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Interfaz que obliga a una clase a tener
// ciertas propiedades y métodos
interface PersonaInterface {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

// Clase que implementa la interfaz `PersonaInterface`
class Persona implements PersonaInterface {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;

  // El constructor inicializa las propiedades de la clase
  constructor(nombre: string, edad: number, sexo: string, estadoCivil: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }

  // Método requerido por la interfaz
  imprimirBio(): void {
    console.log(
      `Hola, soy ${this.nombre}, tengo ${this.edad} años, soy ${this.sexo} y mi estado civil es ${this.estadoCivil}.`,
    );
  }
}
