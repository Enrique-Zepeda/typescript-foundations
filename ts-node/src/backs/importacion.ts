// Importamos la clase `Hero` desde el archivo indicado.
// Se usan llaves `{}` porque `Hero` fue exportado de forma nombrada.

import { Hero } from "../interfaces";

// Otras formas de importar:
// import { Hero as SuperHero, Hero3 } from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero";
// import { powers } from "./data/powers";
// import powers, { Power } from "./data/powers";

// Esto causaría conflicto con el nombre `Hero` importado
// const Hero: number = 123;

// Creamos una nueva instancia de la clase `Hero`
const ironman = new Hero("Ironman", 1, 34);

// Ejemplos alternativos usando otras formas de importación:
// const ironman = new SuperHero("Ironman", 1, 34);
// const ironman2 = new HeroClasses.Hero2("Ironman", 1, 34);

// Mostramos en consola el objeto completo
console.log(ironman);

// Mostramos el valor del getter `power`
console.log(ironman.power);

// Ejemplo si quisiéramos usar el arreglo de poderes importado
// console.log(powers[1]);
