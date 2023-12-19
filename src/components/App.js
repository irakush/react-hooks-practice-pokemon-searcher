import React, {useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const url = "http://localhost:3001/pokemon"
  const [pokemonsArray, setPokemonsArray] = useState([])
  const [searchPokemonsArray, setSearchPokemonsArray] = useState([])

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

  return (
    <div className="App">
      <PokemonPage 
        pokemonsArray={pokemonsArray} 
        setPokemonsArray={setPokemonsArray} 
        searchArr = {searchPokemonsArray}
      />
    </div>
  );
}

export default App;
