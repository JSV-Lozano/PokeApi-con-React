import React from "react";
import { PokeCards } from "./PokeCards";
import { pokeContext } from "../context/context";
import { Modal } from "../Modal";
import { PokeInfo } from "./PokeInfo";
import "./pokedex.css";
function Pokedex() {
  const [dataPoke, setDataPoke] = React.useState();
  const [modal, setModal] = React.useState(false);
  const { setPokemons, pokemons, nextUrl, prevUrl, setUrl, state } =
    React.useContext(pokeContext);
  const fav = state.fav;
  const pokeUrlNext = () => {
    setPokemons([]);
    setUrl(nextUrl);
  };
  const pokeUrlPrev = () => {
    setPokemons([]);
    setUrl(prevUrl);
  };

  return (
    <>
      <h1 className="pokedex">Pokedex</h1>
      <div className="container-pokedex">
        {pokemons.map((pokemon) => (
          <PokeCards
            pokemon={pokemon}
            infoPoke={(data) => setDataPoke(data)}
            setModal={setModal}
            modal={modal}
            fav={fav}
            key={pokemon.name}
          />
        ))}
      </div>
      {!!modal && (
        <Modal>
          <PokeInfo data={dataPoke} setModal={setModal} />
        </Modal>
      )}

      <div className="center">
        <div className="pagination">
          {prevUrl && <button onClick={pokeUrlPrev}>antes</button>}
          {nextUrl && <button onClick={pokeUrlNext}>siguiente</button>}
        </div>
      </div>
    </>
  );
}

export { Pokedex };

/*  const [pokemons, setPokemons] = React.useState([]);
  const [page, setPage] = useState(0);
  Obtenemos los datos de las url de los pokemonso y por cada
uno de ellos creamos un array con su informacion
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
  console.log(pokemons);

  React.useEffect(() => {
    fetchPokemons();
  }, []);
 */
