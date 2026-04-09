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
export {};
//# sourceMappingURL=app.js.map