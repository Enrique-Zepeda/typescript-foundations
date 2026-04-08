(() => {
  const fullName = (fistName: string, ...restArgs: string[]): string => {
    return `${fistName} ${restArgs.join(" ")}`;
  };
  const superman = fullName("Clark", "Joseph", "Kent");
  console.log({ superman });
})();
