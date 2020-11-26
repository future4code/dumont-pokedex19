import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

function Details() {
  const [detailsPokemon, setDetailsPokemon] = useState([]);

  const pathParams = useParams();
  const name = pathParams;
  const history = useHistory();

  useEffect(() => {
    choosePokemon();
  }, []);

  const choosePokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      setDetailsPokemon(response.results);
    });
  };

  return (
    <div>
      {detailsPokemon.map((item) => {
        <p>{item.name}</p>;
      })}
      <Link to={`/details/${detailsPokemon.name}`}>
        <button onClick={choosePokemon}> Ir para Detalhes</button>
      </Link>
    </div>
  );
}

export default Details;
