(() => {
  const batman: string = "'Batman'";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Heroe: Volcan Negro`;

  const abc = 123;

  console.log(`I'm ${batman}, ${abc.toString()}`);
  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || "No esta presente");
})();
