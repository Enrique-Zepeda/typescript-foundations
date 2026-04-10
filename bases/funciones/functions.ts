(() => {
  // Variable de tipo string
  const hero: string = "Flash";

  // Función tradicional que retorna un string
  function returnName(): string {
    return hero;
  }

  // Función flecha que también retorna un string
  const activateBatisignal = (): string => {
    return "Batiseñal Activada";
  };

  // `typeof` sobre una función en JavaScript devuelve "function"
  console.log(typeof activateBatisignal);

  // Guardamos en una variable el valor que retorna la función
  const heroName = returnName();
})();
