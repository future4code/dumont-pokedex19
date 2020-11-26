import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

function Pokedex(props) {
  const history = useHistory();
  const pathParams = useParams();
  const name = pathParams;

  const { listPokedex, listHome, setListHome } = props;

  const deletPokemon = (pokemon) => {
    const index = listPokedex.findIndex((i) => i.id === pokemon.id);
    const newPokedex = [...listHome, pokemon];
    setListHome(newPokedex);
    listPokedex.splice(index, 1);
  };

  const choosePokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(() => {
      history.push("/details");
    });
  };

  return (
    <div>
      {listPokedex.map((pokemon) => {
        return (
          <div>
            <img src={pokemon.sprites.front_default}></img>

            <p>{pokemon.name}</p>

            <button onClick={() => deletPokemon(pokemon)}>
              Remover Pokemon
            </button>

            <Link to={`/details/${pokemon.name}`}>
              <button onClick={choosePokemon}> Ir para Detalhes</button>
            </Link>
          </div>
        );
      })}

      <Link to="/">
        <button>Ir para Home</button>
      </Link>
    </div>
  );
}

export default Pokedex;
