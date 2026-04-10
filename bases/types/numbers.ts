(() => {
  // Variable de tipo number
  let avengers: number = 10;
  console.log(avengers);

  // Constante de tipo number
  // Al ser const, su valor no puede cambiar
  const villians: number = 20;

  // Comparamos ambos valores numéricos
  if (avengers < villians) {
    console.log("Estamos en problemas");
  } else {
    console.log("Nos salvamos");
  }

  // `Number()` intenta convertir un valor a número
  // Como "123A" no es un número válido,
  // el resultado será NaN (Not a Number)
  avengers = Number("123A");

  // Mostramos el nuevo valor de `avengers`
  console.log({ avengers });
})();
