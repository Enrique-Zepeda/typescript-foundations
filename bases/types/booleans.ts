(() => {
  // Variable booleana con valor inicial `true`
  let isSuperman: boolean = true;

  // Variable booleana con valor inicial `false`
  let isBatman: boolean = false;

  // El resultado de `true && false` es `false`
  // porque en un AND ambas condiciones deben ser verdaderas
  isSuperman = true && false;

  // Esto daría error porque `isSuperman` es boolean y aquí se intenta asignar un string:
  // isSuperman = isBatman ? 'ABC' : 'XYZ';

  // Operador ternario:
  // si `isBatman` es true, asigna true
  // si `isBatman` es false, asigna false
  isSuperman = isBatman ? true : false;

  // Muestra el valor dentro de un objeto
  console.log({ isSuperman });
})();
