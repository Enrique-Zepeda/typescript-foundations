(() => {
    // Siempre evitar any
    let avanger = 123;
    let exists;
    let power;
    avanger = "Dr Strange";
    console.log(avanger.charAt(0));
    console.log(avanger.charAt(0)); // Casteo para tratar los datos
    avanger = 150.123442;
    console.log(avanger.toFixed(2)); // Casteo
    console.log(exists);
    console.log(power);
})();
export {};
