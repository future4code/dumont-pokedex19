import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import styled from 'styled-components';

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

    if (listPokedex == 0) {
      history.push("/")
    }
  };

  const choosePokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(() => {
      history.push("/details");
    });
  };

  return (
    <div>
      {listPokedex == 0 ? <EmptyPokedex><h2 style={{textAlign: "center"}}>A Pokedex está vazia!</h2><h2> <Link className="empty-link" to="/">Adicione alguns pokemons! </Link></h2></EmptyPokedex> : listPokedex.map((pokemon) => {
        return (
          <div>
            <img src={pokemon.sprites.front_default}></img>

            <p>{pokemon.name}</p>

            <button onClick={() => deletPokemon(pokemon)}>
              Remover Pokemon
            </button>

            <Link to={`/details/${pokemon.name}`}>
              <button onClick={choosePokemon}>Ver detalhes</button>
            </Link>
          </div>
        );
      })}
      
    </div>
  );
}

export default Pokedex;


const EmptyPokedex = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .empty-link {
    text-align: center;
    text-decoration: underline;
    color: black;
  }
`