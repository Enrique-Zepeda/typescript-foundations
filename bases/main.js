"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        salvarMundo() {
            return "Mundo a salvo";
        }
    }
    class Villian extends Mutant {
        conquistarMundo() {
            return "Mundo conquistado";
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());
    const printName = (character) => {
        console.log(character.name);
    };
    printName(wolverine);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger("Antman", "Capitan", "Scott Lang");
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen llamado");
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("El nombre debe ser mayor a 3 letras");
            }
            this.name = name;
        }
        getFullNameFromXmen() {
            return `${this.name} ${this.realName}`;
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    console.log(wolverine.fullName);
    wolverine.fullName = "Kike";
    console.log(wolverine.fullName);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis... el único");
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName("Kike");
    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
})();
//# sourceMappingURL=main.js.map