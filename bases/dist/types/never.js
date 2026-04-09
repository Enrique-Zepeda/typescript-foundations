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
    error("Error");
})();
export {};
//# sourceMappingURL=never.js.map