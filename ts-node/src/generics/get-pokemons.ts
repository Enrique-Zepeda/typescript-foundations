import axios from "axios";
import { Pokemon } from "../interfaces";

// Función asíncrona que retorna una promesa de tipo `Pokemon`
export const getPokemons = async (pokemonId: number): Promise<Pokemon> => {
  // Al usar `axios.get<Pokemon>()`,
  // indicamos que la respuesta tendrá la estructura de la interfaz `Pokemon`
  const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

  // Ejemplo de acceso a otras propiedades si existieran en la interfaz
  // console.log(data.abilities[0].ability);

  // Retornamos la data ya tipada como `Pokemon`
  return data;
};
