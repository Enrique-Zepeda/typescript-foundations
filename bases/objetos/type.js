(() => {
    // `flash` debe cumplir con la estructura del tipo `Hero`
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    // `superman` también usa el mismo tipo `Hero`
    // `age` es opcional, pero aquí sí se incluye
    // `getName` también es opcional, y en este caso se define
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super Fuerza"],
        getName() {
            return this.name;
        },
    };
})();
export {};
