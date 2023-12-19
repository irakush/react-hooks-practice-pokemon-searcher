import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const url = "http://localhost:3001/pokemon"
  const [pokemonsArray, setPokemonsArray] = useState([])
  const [searchPokemonsArray, setSearchPokemonsArray] = useState([])

  console.log("pokemonsArray ", pokemonsArray)

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(setPokemonsArray) // .then(data => setPokemonsArray(data))
  }, [])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(setSearchPokemonsArray) // .then(data => setPokemonsArray(data))
  }, [])

  // console.log(pokemonsArray)
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
        searchArr = {searchPokemonsArray}
      />
      <br />
      <PokemonCollection 
        pokemonsArray={pokemonsArray} 
      />
    </Container>
  );
}

export default PokemonPage;
