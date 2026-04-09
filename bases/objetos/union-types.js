(() => {
    //* Los union types permiten que una variable pueda tener más de un tipo de dato usando el operador `|`
    // `myCustomVariable` puede almacenar distintos tipos de datos:
    // - string
    // - number
    // - Hero
    // Eso es un union type: usar `|`
    let myCustomVariable = "Kike";
    // Aquí guarda un string
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable); // string
    // Ahora la misma variable guarda un number
    myCustomVariable = 20;
    console.log(typeof myCustomVariable); // number
    // Ahora guarda un objeto con la estructura de `Hero`
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    // En JavaScript, los objetos regresan "object" con typeof
    console.log(typeof myCustomVariable); // object
})();
export {};
