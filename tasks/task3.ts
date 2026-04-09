// =========================
// OBJETOS
// =========================

// Definimos un tipo `Auto` para indicar
// qué propiedades debe tener un objeto de este tipo
type Auto = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;

  // Método opcional
  disparar?: () => void;
};

// `batimovil` cumple con la estructura de `Auto`
const batimovil: Auto = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
};

// `bumblebee` también cumple con `Auto`
// y además incluye el método opcional `disparar`
const bumblebee: Auto = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() {
    console.log("Disparando");
  },
};

// =========================
// ARREGLO DE OBJETOS PERSONALIZADOS
// =========================

// Definimos un tipo `Villano`
type Villano = {
  nombre: string;

  // Aquí permitimos que `edad` sea un número
  // o también `undefined`
  edad: number | undefined;
  mutante: boolean;
};

// `villanos` es un arreglo de objetos tipo `Villano`
const villanos: Villano[] = [
  {
    nombre: "Lex Luthor",
    edad: 54,
    mutante: false,
  },
  {
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true,
  },
  {
    nombre: "James Logan",
    edad: undefined,
    mutante: true,
  },
];

// =========================
// MÚLTIPLES TIPOS
// =========================

// Tipo para Charles
type Charles = {
  poder: string;
  estatura: number;
};

// Tipo para Apocalipsis
type Apocalipsis = {
  lider: boolean;
  miembros: string[];
};

// Objeto de tipo `Charles`
const charles: Charles = {
  poder: "psiquico",
  estatura: 1.78,
};

// Objeto de tipo `Apocalipsis`
const apocalipsis: Apocalipsis = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};

// =========================
// UNION TYPES
// =========================

// `mystique` puede ser de tipo `Charles` o `Apocalipsis`
let mystique: Charles | Apocalipsis;

// Aquí guarda un objeto tipo `Charles`
mystique = charles;

// Aquí ahora guarda un objeto tipo `Apocalipsis`
mystique = apocalipsis;
