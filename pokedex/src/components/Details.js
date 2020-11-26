import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const CardDetalhes = styled.div`
  margin-left: 240px;
`;

function Details() {
  const [detailsPokemon, setDetailsPokemon] = useState(undefined);

  const pathParams = useParams();
  const id = pathParams.id;

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setDetailsPokemon(response.data);
    });
  };

  return (
    <CardDetalhes>
      {detailsPokemon && (
        <div>
          <div>
            <img src={detailsPokemon.sprites.front_default} />
          </div>

          <div>
            <img src={detailsPokemon.sprites.back_default} />
          </div>

          <p>{detailsPokemon.name}</p>

          {detailsPokemon.types.map((item) => {
            return <p key={item.name}>{item.type.name}</p>;
          })}

          {detailsPokemon.stats.map((item) => {
            return (
              <p>
                {item.stat.name}: {item.base_stat}
              </p>
            );
          })}

          {detailsPokemon.abilities.map((item) => {
            return <p>{item.name}</p>;
          })}

          {/* {detailsPokemon.moves.map((item) => {
            return <p>{item.move.name}</p>;
          })} */}
        </div>
      )}

      <Link to="/">
        <button>Ir para Home</button>
      </Link>
      <Link to="/pokedex">
        <button>Voltar para pokedex</button>
      </Link>
    </CardDetalhes>
  );
}

export default Details;
