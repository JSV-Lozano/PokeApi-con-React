import React from "react";
import { getPokemonsData } from "../../../Api/getPokemons";
import { useHook } from "../hooks/useInitialState";

const pokeContext = React.createContext();
function PokeProvider({ children }) {
  const { addFavorite, state } = useHook();
  const [pokemons, setPokemons] = React.useState([]);
  const [nextUrl, setNextUrl] = React.useState();
  const [prevUrl, setPrevUrl] = React.useState();
  const [url, setUrl] = React.useState("https://pokeapi.co/api/v2/pokemon");
  //Peticion base a la api de pokemon
  const getPokemons = async (limit = 25, offset = 0) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  /* Obtenemos los datos de las url de los pokemonso y por cada
    uno de ellos creamos un array con su informacion */
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      const promisesData = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      const result = await Promise.all(promisesData);
      setPokemons(result);
    } catch (error) {
      console.log(error);
    }
  };
  /*  console.log(pokemons); */
  React.useEffect(() => {
    fetchPokemons();
  }, [url]);

  return (
    <pokeContext.Provider
      value={{
        state,
        pokemons,
        setPokemons,
        nextUrl,
        setNextUrl,
        prevUrl,
        setPrevUrl,
        setUrl,
        addFavorite,
      }}
    >
      {children}
    </pokeContext.Provider>
  );
}
export { pokeContext, PokeProvider };
