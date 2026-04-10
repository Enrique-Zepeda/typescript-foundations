(() => {
  // Las variables de tipo string almacenan texto
  const batman: string = "'Batman'";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Heroe: Volcan Negro`;

  // Número que luego convertimos a string
  const abc = 123;

  // Template string + conversión de número a texto
  console.log(`I'm ${batman}, ${abc.toString()}`);

  // Convertir string a mayúsculas
  console.log(batman.toUpperCase());

  // Acceso seguro a una posición que puede no existir
  console.log(batman[10]?.toUpperCase() || "No esta presente");
})();
