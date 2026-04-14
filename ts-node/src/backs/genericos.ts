import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
import { Villain } from "../interfaces";

// `printObject` recibe cualquier tipo de dato
// y lo muestra en consola
printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5, 6]);
printObject("Hola mundo");

// El valor enviado a una función genérica
// permite que TypeScript infiera el tipo automáticamente
const name: string = "Kike";

// Aquí TypeScript infiere que el tipo retornado es `number`,
// por eso se puede usar `toFixed(2)`
console.log(genericFunction(3.1416).toFixed(2));

// Aquí infiere que el tipo retornado es `Date`,
// por eso se puede usar `getTime()`
console.log(genericFunction(new Date()).getTime());

// Aquí `name.length` es un number,
// así que el retorno también será `number`
console.log(genericFunctionArrow(name.length));

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

// Si forzamos el genérico con `<Villain>`,
// TypeScript tratará el objeto como tipo `Villain`
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);

// Ejemplo de error:
// Si intentáramos forzarlo como `Hero`,
// `dangerLevel` no existiría en ese tipo
// console.log(genericFunctionArrow<Hero>(deadpool).dangerLevel);
