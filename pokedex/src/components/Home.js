import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import usePokemons from "../hooks/usePokemons";
import styled from 'styled-components'

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
    <Container>
      <PokemonGrid>
      {listHome.map((pokemon) => {
        return (
          <PokemonCard key={pokemon.name}>
            <Link className="card-link" to={`/details/${pokemon.name}`}>
            <img src={pokemon.sprites.front_default}/>
            <h3>{pokemon.name}</h3>
            </Link>
            
      
            
          <ButtonContainer>
            <Button onClick={() => setPokedex(pokemon)}>
              Adicionar à Pokedex
            </Button>

            <Link to={`/details/${pokemon.name}`}>
              <Button onClick={() => goToDetails(pokemon.id)}>
                {" "}
                Ver detalhes
              </Button>
            </Link>
            </ButtonContainer>
          </PokemonCard>
        );
      })}
      </PokemonGrid>
    </Container>
  );
}

export default Home;

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

