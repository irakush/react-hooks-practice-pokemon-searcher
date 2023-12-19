import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonsArray }) {

  const pokemonCard = pokemonsArray.map((eachPokemon) => {
    return  <PokemonCard eachPokemon={eachPokemon} key={eachPokemon.id} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      { pokemonCard }
    </Card.Group>
  );
}

export default PokemonCollection;
