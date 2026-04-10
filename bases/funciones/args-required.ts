(() => {
  // Ambos parámetros son obligatorios, por lo que la función necesita recibir:
  // - firstName: string
  // - lastName: string
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };

  // Aquí enviamos los dos argumentos requeridos
  const name = fullName("Tony", "Stark");

  console.log(name);
})();
