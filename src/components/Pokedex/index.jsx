import React from "react";
import { PokeCards } from "./PokeCards";
import { pokeContext } from "../context/context";
import { Loader } from "../Loader";
import "./pokedex.css";
function Pokedex() {
  const [dataPoke, setDataPoke] = React.useState();
  const [isSearch, setIsSearch] = React.useState(false);
  const {
    setPokemons,
    pokemons,
    nextUrl,
    prevUrl,
    setUrl,
    searchPokemons,
    setSearchPokemons,
    setLoading,
    loading,
    url,
  } = React.useContext(pokeContext);

  const pokeUrlNext = () => {
    setPokemons([]);
    setUrl(nextUrl);
  };
  const pokeUrlPrev = () => {
    setPokemons([]);
    setUrl(prevUrl);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (searchPokemons === "") {
      setIsSearch(false);
      setSearchPokemons("");
      console.log(loading, url, searchPokemons);
    } else {
      try {
        const resp = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${searchPokemons}`
        );
        const data = await resp.json();
        setIsSearch(true);
        setSearchPokemons(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(searchPokemons);
    setLoading(false);
  };
  const returnAListPoke = () => {
    setIsSearch(false);
    setSearchPokemons("");
    document.querySelector(".nes-input").value = "";
  };

  return (
    <>
      <h1 className="pokedex">Pokedex</h1>
      <form>
        <input
          type="search"
          placeholder="Buscar pokemon"
          value={"" || searchPokemons.name }
          onChange={(e) => setSearchPokemons(e.target.value)}
          id="name_field"
          className="nes-input"
        />
        <button
          type="button"
          className="nes-btn is-success"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
      {isSearch ? (
        <>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={returnAListPoke}
          >
            Volver
          </button>
          <div className="poke">
            <div className="container-cards" key={searchPokemons.name}>
              <h2>{searchPokemons.name} </h2>
              <p>#{searchPokemons.id} </p>
              <img
                src={searchPokemons.sprites.front_default}
                alt="Pokemon.img"
              />
              <div className="types">
                {searchPokemons.types.map((data) => (
                  <p className={data.type.name} key={data.type.name}>
                    {data.type.name}{" "}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container-pokedex">
            {loading ? (
              <Loader />
            ) : (
              <>
                {pokemons.map((pokemon) => (
                  <PokeCards
                    pokemon={pokemon}
                    infoPoke={(data) => setDataPoke(data)}
                    key={pokemon.name}
                  />
                ))}
              </>
            )}
          </div>
          <div className="center">
            <div className="pagination">
              {prevUrl && (
                <button
                  type="button"
                  className="nes-btn is-primary"
                  onClick={pokeUrlPrev}
                >
                  antes
                </button>
              )}
              {nextUrl && (
                <button
                  type="button"
                  className="nes-btn is-primary"
                  onClick={pokeUrlNext}
                >
                  siguiente
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export { Pokedex };
