import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

function Details() {
  const [detailsPokemon, setDetailsPokemon] = ([])
  const name = pathParams;
  const pathParams = useParams();

  const history = useHistory();

  const choosePokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(() => {
      history.push("/details");
    });
  };
  return (
    <div>
      <Link to={`/details/${detailsPokemon.name}`}>
        <button onClick={choosePokemon}> Ir para Detalhes</button>
      </Link>
    </div>
  );
}

export default Details;
