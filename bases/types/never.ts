(() => {
  // Una función con tipo `never` nunca retorna un valor.
  // Normalmente se usa cuando la función lanza un error o cuando entra en un ciclo infinito.
  const error = (message: string): never => {
    throw new Error(message);
  };

  // Esta función puede devolver dos posibilidades:
  // - `never`, si lanza un error
  // - `number`, si todo sale bien
  const errorOrResult = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }

    return 1;
  };

  // Si se descomenta, esta función detiene la ejecución porque lanza un error inmediatamente
  // error("Error");
})();
