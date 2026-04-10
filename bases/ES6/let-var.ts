(() => {
  // `var` ya no se recomienda porque tiene un alcance de función
  // y puede provocar comportamientos confusos.
  // En TypeScript sí existe, pero normalmente se prefiere usar `let` o `const`.
  // console.log(a);
  var a = "aaa";

  // `let` tiene alcance de bloque y es más seguro que `var`.
  // Tampoco se puede usar antes de declararse.
  // console.log(b);
  let b = "bbb";

  // Se recomienda usar `const` por defecto
  // y cambiar a `let` solo cuando el valor necesite reasignarse.
  const nombre = "Kike";

  // También se puede guardar una función en una constante.
  // La referencia no puede ser reasignada si fue declarada con `const`.
  const getName = () => {
    console.log("Viejo getName");
  };

  // Esto daría error porque `getName` fue declarada con `const`
  // y no se puede reasignar.
  // getName = () => {
  //   console.log("Nuevo getName");
  // };

  // getName();
})();
