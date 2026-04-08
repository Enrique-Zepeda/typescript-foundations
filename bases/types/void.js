(() => {
    // Void no regresa nada no hay valor de retorno = a undefined
    function callBatman() { }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
export {};
