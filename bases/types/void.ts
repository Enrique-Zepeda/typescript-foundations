(() => {
  // `void` indica que una función no devuelve un valor útil o significativo.
  function callBatman(): void {}

  // Esta función también es `void`.
  // `return;` solo termina la función,
  // pero no retorna ningún valor útil.
  const callSuperman = (): void => {
    return;
  };

  // Aunque la función es `void`, en JavaScript  su resultado real al ejecutarse es `undefined`
  const a = callBatman();

  console.log(a);
})();
