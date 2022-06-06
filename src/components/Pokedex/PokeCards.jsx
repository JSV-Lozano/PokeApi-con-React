import React from "react";
import "./pokedex.css";
import { pokeContext } from "../context/context";

function PokeCards({ pokemon, infoPoke, setModal, modal, fav }) {
  const { addFavorite } = React.useContext(pokeContext);
  const [hear, setHear] = React.useState(false);
  const handleClick = () => {
    !modal ? setModal(true) : setModal(false);
    infoPoke(pokemon);
    console.log("click");
  };

  const handleAddFavorite = (data) => () => {
    addFavorite(data.id);
    setHear(!hear);
    console.log("Agregado a favoritos");
  };

  const pokeSriptes = pokemon.sprites.front_default;

  return (
    <>
      <div className="poke">
        <div className="container-cards" key={pokemon.name}>
          {/*  <div className="poke-card "> */}
          {/* <div className="poke-Center"> */}
          <h2>{pokemon.name} </h2>
          <p>#{pokemon.id} </p>
          <img
            className="poke-Img"
            src={pokeSriptes}
            alt={pokemon.name}
            lazyload="true"
            onClick={handleClick}
          />
          <div className="types">
            {pokemon.types.map((data) => (
              <p className={data.type.name} key={data.type.name}>
                {data.type.name}{" "}
              </p>
            ))}
          </div>
          <button className="button-fav" onClick={handleAddFavorite(pokemon)}>
            {hear ? "❤" : "🖤"}
          </button>
        </div>
      </div>
    </>
  );
}

export { PokeCards };
