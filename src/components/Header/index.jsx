import React from "react";
import "./header.css";
import { pokeContext } from "../context/context";

function Header() {
  const imgNav =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <div className="header">
      <img className="imgPoke" src={imgNav} alt="logo" />
    </div>
  );
}

export { Header };
