import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const history = useHistory();

  const pathParams = useParams();
  const name = pathParams;

  useEffect(() => {
    listaDePokemon();
  }, []);

  const listaDePokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((response) => {
        setPokemon(response.data.results);
      });
  };

  const choosePokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(() => {
      history.push("/details");
    });
  };
  console.log(pokemon);

  return (
    <div>
      {pokemon.map((pokemons) => {
        return (
          <div>
            <p>{pokemons.name}</p>
            <Link to={`/details/${pokemons.name}`}>
              <button onClick={choosePokemon}> Ir para Detalhes</button>
            </Link>
            
              <button>Adicionar Pokemon</button>
            
          </div>
        );
      })}

      <Link to="/pokedex">
        <button>Ir para Pokedex</button>
      </Link>
    </div>
  );
}

export default Home;
