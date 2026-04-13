"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super Fuerza"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: "Kike",
        age: 23,
        address: {
            id: 125,
            zip: "ASDDF WWSA",
            city: "GDL",
        },
        getFullAddress(id) {
            return this.address.zip;
        },
    };
    const client2 = {
        name: "Zepeda",
        age: 24,
        address: {
            id: 117,
            zip: "3345234",
            city: "Japón",
        },
        getFullAddress(id) {
            return this.address.zip;
        },
    };
    console.log(client.getFullAddress("1"));
    console.log(client2.getFullAddress("2"));
})();
(() => {
    let addNumberFunction;
    addNumberFunction = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map