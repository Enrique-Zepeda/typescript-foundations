(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateBatisignal = (): string => {
    return "Batiseñal Activada";
  };

  console.log(typeof activateBatisignal);

  const heroName = returnName();
})();
