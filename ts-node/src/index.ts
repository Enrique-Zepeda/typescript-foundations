import { getPokemons } from "./generics/get-pokemons";

// También podríamos imprimir todo el objeto completo
// console.log(getPokemons(4));

// `getPokemons(4)` retorna una promesa.
// Cuando se resuelve, recibimos un objeto de tipo `Pokemon`
getPokemons(4)
  .then((pokemon) => {
    // Gracias al tipado, TypeScript ya reconoce
    // las propiedades disponibles del objeto `pokemon`
    console.log(pokemon.sprites.front_default);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Fin de getPokemons"));
