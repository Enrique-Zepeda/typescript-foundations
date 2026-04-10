(() => {
  // Función que recibe:
  // - `firstName` obligatorio
  // - `lastName` opcional
  // - `upper` con valor por defecto en `false`
  // Retorna un string
  const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
    // Si `upper` es true, retorna el nombre completo en mayúsculas
    if (upper) {
      return `${firstName} ${lastName || "-----"}`.toUpperCase();
    } else {
      // Si `upper` es false, retorna el nombre normal
      return `${firstName} ${lastName || "-----"}`;
    }
  };

  // Llamamos la función enviando nombre, apellido y `true`
  // para que el resultado salga en mayúsculas
  const name = fullName("Tony", "Stark", true);

  console.log(name);
})();
