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
    <Container>
      <PokemonGrid>
      {listPokedex == 0 ? <EmptyPokedex><h2 style={{textAlign: "center"}}>A Pokedex está vazia!</h2><h2> <Link className="empty-link" to="/">Adicione alguns pokemons! </Link></h2></EmptyPokedex> : listPokedex.map((pokemon) => {
        return (
          <PokemonCard>
            <img src={pokemon.sprites.front_default}></img>

            <p>{pokemon.name}</p>
          <ButtonContainer>
            <Button onClick={() => deletPokemon(pokemon)}>
              Remover Pokemon
            </Button>

            <Link to={`/details/${pokemon.name}`}>
              <Button onClick={choosePokemon}>Ver detalhes</Button>
            </Link>
          </ButtonContainer>
            </PokemonCard>
        );
      })}
      </PokemonGrid>
      
    </Container>
  );
}

export default Pokedex;

const Container = styled.div`
  background-image: #F8F4F9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PokemonGrid = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin: 1.5rem;

  @media screen and (max-width: 900px) {
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 1rem;

}

@media screen and (max-width: 600px) {
  grid-template-columns: 1fr 1fr;

}

`

const PokemonCard = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px solid #96031A;
  height: 35vh;
  width: 10vw;
  padding: 1.5rem;
  font-size: 1.3rem;
  align-items: center;
  justify-content: center;
  background-color: #FDF0D5;
  h3{
    text-transform: capitalize;
  }

  .card-link {
    color: black;
    text-decoration: none;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (max-width: 900px) {
    height: 55vh;
    width: 15vw;

}
  
  @media screen and (max-width: 600px) {
  height: 50vh;
  width: 35vw;

}
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