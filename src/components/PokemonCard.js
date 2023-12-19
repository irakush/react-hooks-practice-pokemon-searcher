import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ eachPokemon }) {
  const [frontOrBack, setFrontOrBack] = useState(true)

  function toggleFrontBack() {
    setFrontOrBack(!frontOrBack)
  }

  return (
    <Card onClick={toggleFrontBack}>
      <div>
        <div className="image">
          <img src={frontOrBack ? eachPokemon.sprites.front : eachPokemon.sprites.back} alt="oh no!"  />
        </div>
        <div className="content">
          <div className="header">{eachPokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {eachPokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
