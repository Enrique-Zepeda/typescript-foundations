(() => {
  // El primer parámetro es obligatorio. `...restArgs` agrupa el resto de los argumentos en un arreglo de strings.
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    // `join(" ")` une todos los elementos del arreglo en un solo texto separado por espacios.
    return `${firstName} ${restArgs.join(" ")}`;
  };

  // "Joseph" y "Kent" se guardan dentro de `restArgs`
  const superman = fullName("Clark", "Joseph", "Kent");

  console.log({ superman });
})();
