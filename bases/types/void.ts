(() => {
  // Void no regresa nada no hay valor de retorno = a undefined
  function callBatman(): void {}

  const callSuperman = (): void => {
    return;
  };

  const a = callBatman();
  console.log(a);
})();
