import React, {useState} from "react";

function Search({ setPokemonsArray, searchArr }) {

  function handleSearch(e) {
    const value = e.target.value

    if (value != "") {
      searchArr = searchArr.filter((eachPokemon) => {
        return eachPokemon.name.includes(value)
      })
    } 

    setPokemonsArray((prev) => searchArr)
    
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
