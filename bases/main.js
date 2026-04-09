"use strict";
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = ["batman", "superman"];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        Fuerza[Fuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
        Fuerza[Fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
        Fuerza[Fuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaAcuaman = Fuerza.fuerzaAcuaman;
    const fuerzaBatman = Fuerza.fuerzaBatman;
    const fuerzaFlash = Fuerza.fuerzaFlash;
    const fuerzaSuperman = Fuerza.fuerzaSuperman;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "-----"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "-----"}`;
        }
    };
    const name = fullName("Tony", "Stark", true);
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "-----"}`;
    };
    const name = fullName("Tony");
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log(name);
})();
(() => {
    const fullName = (fistName, ...restArgs) => {
        return `${fistName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
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
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return "Batiseñal Activada";
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    flash = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super Fuerza"],
    };
    console.log(flash);
})();
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
    let myCustomVariable = "Kike";
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avanger = 123;
    let exists;
    let power;
    avanger = "Dr Strange";
    console.log(avanger.charAt(0));
    console.log(avanger.charAt(0));
    avanger = 150.123442;
    console.log(avanger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ["Omega Rojo", "Duende Verde"];
    villians.forEach((v) => {
        console.log(v.toUpperCase());
    });
    console.log(numbers);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    const errorOrResult = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
})();
(() => {
    let nada = undefined;
    let nulo = null;
    let isActive = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number("123A");
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = "'Batman'";
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    const abc = 123;
    console.log(`I'm ${batman}, ${abc.toString()}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta presente");
})();
(() => {
    const hero = ["Dr Strange", 100, true];
    hero[0] = "Iroman";
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() { }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map