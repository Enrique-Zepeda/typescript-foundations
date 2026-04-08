(() => {
    const hero = ["Dr Strange", 100, true];
    // No acepta el cambio porque debe de seguir el mismo orden de la tupla
    //   hero[0] = 50;
    //   hero[1] = "Iroman";
    // Aqui si lo acepta
    hero[0] = "Iroman";
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
export {};
