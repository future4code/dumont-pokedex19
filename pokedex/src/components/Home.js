import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import usePokemons from "../hooks/usePokemons";

function Home(props) {
  const history = useHistory();
  const pathParams = useParams();
  const name = pathParams;

  const pokemons = usePokemons("https://pokeapi.co/api/v2/pokemon/?limit=30", []);
  const { listPokedex, setListPokedex, listHome, setListHome } = props;

  useEffect(() => {
    detailsPokemons();
  }, [pokemons]);

  const detailsPokemons = async () => {
    let copyArray = [];
    try {
      for (const pokemon of pokemons) {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        copyArray.push(res.data);
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }

    if (listHome.length === 0 && listPokedex.length === 0) {
      setListHome(copyArray);
    }
  };

  const setPokedex = (pokemon) => {

    const index = listHome.findIndex((i) => i.id === pokemon.id);
    const newPokedex = [...listPokedex, pokemon];
    setListPokedex(newPokedex);
    listHome.splice(index, 1);
  };

  const goToDetails = (id) => {
    history.push(`/details/${id}`);
  };

  return (
    <div>
      <Link to="/pokedex">
        <button>Ir para Pokedex</button>
      </Link>

      {listHome.map((pokemon) => {
        return (
          <div key={pokemon.name}>
            <img src={pokemon.sprites.front_default}></img>

            <p>{pokemon.name}</p>

            <button onClick={() => setPokedex(pokemon)}>
              Adicionar Pokemon
            </button>

            <Link to={`/details/${pokemon.name}`}>
              <button onClick={() => goToDetails(pokemon.id)}>
                {" "}
                Ir para Detalhes
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
