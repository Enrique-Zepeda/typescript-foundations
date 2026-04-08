(() => {
  // ? este simbolo dice que es opcional
  const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName || "-----"}`;
  };
  const name = fullName("Tony");
  console.log(name);
})();
export {};
