import React from "react";
import { getPokemonsData } from "../../../Api/getPokemons";
import { useHook } from "../hooks/useInitialState";

const pokeContext = React.createContext();
function PokeProvider({ children }) {
  const [pokemons, setPokemons] = React.useState([]);
  const [searchPokemons, setSearchPokemons] = React.useState("");
  const [nextUrl, setNextUrl] = React.useState("");
  const [prevUrl, setPrevUrl] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const [url, setUrl] = React.useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=24"
  );
  //Peticion base a la api de pokemon
  const getPokemons = async () => {
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
    setLoading(true);
    try {
      const data = await getPokemons();
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      const promisesData = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      const result = await Promise.all(promisesData);
      setPokemons(result);
      console.log(pokemons);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    console.log(loading);
  };
  React.useEffect(() => {
    getPokemons();
    fetchPokemons();
  }, [url]);

  return (
    <pokeContext.Provider
      value={{
        pokemons,
        setPokemons,
        nextUrl,
        setNextUrl,
        prevUrl,
        setPrevUrl,
        setUrl,
        searchPokemons,
        setSearchPokemons,
        setLoading,
        loading,
        url,
      }}
    >
      {children}
    </pokeContext.Provider>
  );
}
export { pokeContext, PokeProvider };
