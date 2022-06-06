/* //Peticion base a la api de pokemon
export const getPokemons = async (limit = 25, offset = 0) => {
  try {
    let url =
      "https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}; */
//Obtenemos la url de los pokemons
export const getPokemonsData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
