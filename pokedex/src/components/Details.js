import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-image: #F8F4F9;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const ButtonContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const Button = styled.button `
  background-color: transparent;
  color: #96031A;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #96031A;
  margin-top: 1rem;
  &:hover {
    cursor: pointer;
    border: 1px solid black;
    color: black;
  }
`

const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ImgPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 300px;
`

const ContainerDetails = styled.div`
  display: flex;
`

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
    <Container>
      {detailsPokemon && (
        <ContainerDetails>
          <ImgPokemon>
            <img src={detailsPokemon.sprites.front_default} width="200px;" height="200px;" />
            <img src={detailsPokemon.sprites.back_default}  width="200px;" height="200px;" />
          </ImgPokemon>
    
          <ContainerImg>
          <h1>{detailsPokemon.name}</h1>
          <h2>PODERES</h2>

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
          
         {/*{detailsPokemon.moves.map((item) => {
            return <p>{item.move.name}</p>;
          })} */}
          </ContainerImg>
        </ContainerDetails>
      )}
    <ButtonContainer>
      <Link to="/">
        <Button>Ir para Home</Button>
      </Link>
      <Link to="/pokedex">
        <Button>Voltar para pokedex</Button>
      </Link>
    </ButtonContainer>
    </Container>
  );
}

export default Details;
