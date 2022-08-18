import React from "react";
import "./pokedex.css";

function PokeCards({ pokemon }) {
  const pokeSriptes = pokemon.sprites.front_default;
  return (
    <>
      <div className="poke">
        <div className="container-cards" key={pokemon.name}>
          <h2>{pokemon.name} </h2>
          <p>#{pokemon.id} </p>
          <img
            className="poke-Img"
            src={pokeSriptes}
            alt={pokemon.name}
            lazyload="true"
          />
          <div className="types">
            {pokemon.types.map((data) => (
              <p className={data.type.name} key={data.type.name}>
                {data.type.name}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export { PokeCards };
