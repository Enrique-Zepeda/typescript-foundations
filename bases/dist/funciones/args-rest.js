(() => {
    const fullName = (fistName, ...restArgs) => {
        return `${fistName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
export {};
//# sourceMappingURL=args-rest.js.map