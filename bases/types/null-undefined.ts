(() => {
  // Con `strictNullChecks` activado, TypeScript trata  a `null` y `undefined` como tipos distintos.

  // Variable que solo puede guardar `undefined`
  let nada: undefined = undefined;

  // Variable que solo puede guardar `null`
  let nulo: null = null;

  // Variable booleana que también puede ser `undefined`
  // Es decir, puede tener:
  // - true
  // - false
  // - undefined
  let isActive: boolean | undefined = undefined;

  console.log(nada);
})();
