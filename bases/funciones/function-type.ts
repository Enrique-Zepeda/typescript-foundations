(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo esta Salvado`;

  let myFunction: Function;
  //   let myFunction: (y: number, z: number) => number;
  //   let myFunction: (y: string) => string;
  //   let myFunction: () => string;

  //!   myFunction = 10;
  //!   console.log(myFunction);

  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  myFunction = greet;
  console.log(greet("Kike"));

  myFunction = saveTheWorld;
  console.log(saveTheWorld());
})();
