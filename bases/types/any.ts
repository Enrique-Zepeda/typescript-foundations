(() => {
  // Se recomienda evitar `any` porque elimina la seguridad de tipos de TypeScript
  // `any` desactiva prácticamente la verificación de tipos de TypeScript.
  // Se puede usar, pero en general se recomienda evitarlo
  // porque pierde el beneficio del tipado.
  let avanger: any = 123;

  // Si declaramos una variable sin valor inicial ni tipo,
  // TypeScript puede inferirla como `any`
  let exists;
  let power;

  // Ahora `avanger` guarda un string
  avanger = "Dr Strange";

  // Como `avanger` es `any`, TS no marca error al usar métodos de string
  console.log(avanger.charAt(0));

  // Aquí hacemos un casteo (type assertion) para decirle a TS
  // que trate `avanger` como un string
  console.log((avanger as string).charAt(0));

  // Ahora `avanger` guarda un number
  avanger = 150.123442;

  // Aquí se usa otra forma de casteo con sintaxis de ángulos
  // para tratar `avanger` como number
  console.log((<number>avanger).toFixed(2));

  // Estas variables fueron declaradas pero no inicializadas,
  // por eso su valor actual es `undefined`
  console.log(exists);
  console.log(power);
})();
