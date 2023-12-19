import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemonsArray, setPokemonsArray, searchArr }) {
  console.log(pokemonsArray)
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
      pokemonsArray={pokemonsArray}
      setPokemonsArray={setPokemonsArray}
      />
      <br />
      <Search 
        pokemonsArray={pokemonsArray} 
        setPokemonsArray={setPokemonsArray} 
        searchArr={searchArr}
      />
      <br />
      <PokemonCollection 
        pokemonsArray={pokemonsArray} 
      />
    </Container>
  );
}

export default PokemonPage;
