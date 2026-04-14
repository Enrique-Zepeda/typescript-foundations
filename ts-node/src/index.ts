import { Pokemon } from "./decorators/pokemon-class";

// Creamos una nueva instancia de la clase `Pokemon`
const charmander = new Pokemon("Charmander");

// Esto daría error porque el prototipo fue sellado con `Object.seal()`
// y ya no se le pueden agregar nuevas propiedades
// (Pokemon.prototype as any).customName = "Pikachu";

console.log(charmander);

// Aquí se ejecuta el decorador del método,
// que valida si el id está en el rango permitido
charmander.savePokemonToDB(-50);
charmander.savePokemonToDB(3);

// Aquí se intenta cambiar la propiedad decorada `publicApi`
charmander.publicApi = "http:kike.com";
