(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    // isSuperman = (isBatman) ? 'ABC' : 'XYZ';
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman });
})();
export {};
