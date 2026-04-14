// Esta función imprime cualquier valor en consola.
// Aquí se usa `any`, aunque en muchos casos
// un genérico sería más seguro que `any`.
export const printObject = (arg: any) => {
  console.log(arg);
};

// Generalmente el tipo genérico se representa con `<T>`,
// aunque puede usarse otra letra.
// Esta función recibe un argumento de tipo `T`
// y retorna exactamente el mismo tipo `T`.
export function genericFunction<T>(arg: T): T {
  return arg;
}

// Versión arrow function de una función genérica.
// Recibe un valor de tipo `T` y retorna ese mismo tipo.
export const genericFunctionArrow = <T>(arg: T): T => arg;
