import React from "react";
import "./Pokeinfo.css";

function PokeInfo({ data, setModal }) {
  const [card, setCard] = React.useState("");
  const handleCard = () => {
    card === "" ? setCard("modal-card-active") : setCard("");
  };
  console.log(data);
  const handleModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="container-flex">
        <div className={"modal-card " + card}>
          <div className="front-info">
            <p>#{data.id} </p>
            <h1>{data.name}</h1>
            <img src={data.sprites.other.dream_world.front_default} />
            {data.types.map((poke) => (
              <div key={poke.type.name}>
                <p className={poke.type.name}>{poke.type.name}</p>
              </div>
            ))}
          </div>
          <div className="back-info">
            <p>Stats</p>
            {data.stats.map((states) => (
              <div key={states.stat.name}>
                <p>{states.stat.name}</p>
                <p>{states.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="close" onClick={handleModal}>
          ✖
        </button>
      </div>
      <button onClick={handleCard}>💨</button>
    </>
  );
}

export { PokeInfo };
