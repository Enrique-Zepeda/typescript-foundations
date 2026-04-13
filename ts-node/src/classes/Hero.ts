// Importamos el arreglo `powers` desde otro archivo.
// Aquí no usamos llaves porque `powers` fue exportado por defecto (`export default`).
import powers from "../data/powers";

// Exportamos la clase `Hero` de forma nombrada
export class Hero {
  constructor(
    // Propiedades públicas que se crean e inicializan automáticamente
    public name: string,
    public powerId: number,
    public age: number,
  ) {}

  // Getter que busca la descripción del poder
  // correspondiente al `powerId`
  get power(): string {
    return powers.find((power) => power.id === this.powerId)?.desc || "not found";
  }
}

// Otras clases exportadas de forma nombrada
export class Hero2 {
  constructor(
    public name: string,
    public powerId: number,
    public age: number,
  ) {}
}

export class Hero3 {
  constructor(
    public name: string,
    public powerId: number,
    public age: number,
  ) {}
}

// También se puede exportar una constante nombrada
export const PI = 3.1416;
