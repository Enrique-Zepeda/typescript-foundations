(() => {
  let isSuperman: boolean = true;
  let isBatman: boolean = false;

  isSuperman = true && false;
  // isSuperman = (isBatman) ? 'ABC' : 'XYZ';
  isSuperman = isBatman ? true : false;

  console.log({ isSuperman });
})();
