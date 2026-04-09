(() => {
    // TS infiere automáticamente la estructura del objeto `flash`
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    // Como el tipo ya fue inferido, no se le pueden agregar
    // nuevas propiedades que no estaban definidas inicialmente.
    // En este caso, `getNombres` no existe en el tipo original de `flash`.
    // Si queremos permitirlo, debemos definir el tipo del objeto desde el principio.
    flash = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super Fuerza"],
        getNombres() {
            return this.name;
        },
    };
    console.log(flash);
})();
export {};
