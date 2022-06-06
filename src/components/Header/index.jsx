import React from "react";
import "./header.css";
import { pokeContext } from "../context/context";

function Header() {
  const { state } = React.useContext(pokeContext);
  const fav = state.fav;
  const imgNav =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <div className="header">
      <img className="imgPoke" src={imgNav} alt="logo" />
      <button className="fav-button" type="submit">
        🖤
        {!!fav && fav.length > 0 && (
          <span className="Price">{fav.length} </span>
        )}
      </button>
    </div>
  );
}

export { Header };
