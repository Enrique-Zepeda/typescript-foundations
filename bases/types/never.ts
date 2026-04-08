(() => {
  // Las funciones con never jamas deben de terminar
  const error = (message: string): never => {
    throw new Error(message);
  };
  const errorOrResult = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  };

  error("Error");
})();
