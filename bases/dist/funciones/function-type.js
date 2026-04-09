(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta Salvado`;
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(greet("Kike"));
    myFunction = saveTheWorld;
    console.log(saveTheWorld());
})();
export {};
//# sourceMappingURL=function-type.js.map