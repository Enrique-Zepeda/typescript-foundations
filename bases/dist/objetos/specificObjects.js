(() => {
    var _a;
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    flash = {
        name: "Clark Kent",
        powers: ["Super Fuerza"],
        getName() {
            return this.name;
        },
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
export {};
//# sourceMappingURL=specificObjects.js.map