(() => {
  // Este arreglo solo puede contener números
  // porque fue tipado como `number[]`
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Si quisiéramos permitir varios tipos dentro del arreglo,
  // podríamos usar algo así:
  // const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];

  // Esto daría error porque `numbers` solo acepta valores numéricos
  // numbers.push(true);

  // TypeScript infiere que este arreglo es de strings
  // porque todos sus elementos son texto
  const villians = ["Omega Rojo", "Duende Verde"];

  // Recorremos el arreglo con `forEach`
  // y como `v` es string, podemos usar métodos de string como `toUpperCase()`
  villians.forEach((v) => {
    console.log(v.toUpperCase());
  });

  // Mostramos el arreglo de números en consola
  console.log(numbers);
})();
