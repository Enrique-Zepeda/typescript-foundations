(() => {
  // El símbolo `?` indica que el parámetro es opcional, por lo que la función puede recibirlo o no.
  const fullName = (firstName: string, lastName?: string): string => {
    // Si `lastName` existe, se usa.
    // Si no, se muestra "-----" como valor por defecto.
    return `${firstName} ${lastName || "-----"}`;
  };

  // Aquí solo se envía el nombre, así que `lastName` será `undefined`
  const name = fullName("Tony");

  console.log(name);
})();
