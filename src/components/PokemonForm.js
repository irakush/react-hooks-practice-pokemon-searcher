import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemonsArray, setPokemonsArray }) {
  // console.log(pokemonsArray)
  const initObj = {
    "name": "",
    "hp": 0,
    "sprites": {
      "front": "",
      "back": ""
    }
  }

  const [formData, setFormData] = useState(initObj)

  function handleField(e) {
    const { name, value } = e.target
    // const name = e.target.name
    // const value = e.target.value

    if (name === "frontUrl") {
      setFormData({...formData, sprites:{...formData.sprites, front: value}})
    } else if (name === "backUrl") {
      setFormData({...formData, sprites:{...formData.sprites, back: value}})
    } else {
      setFormData({...formData, [name]:value})
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(resData => setPokemonsArray([ ...pokemonsArray, resData ]))

    // setPokemonsArray([ ...pokemonsArray, formData ]) // optimistic
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={handleField}
            value={formData.name}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            onChange={handleField}
            value={formData.hp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleField}
            value={formData.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleField}
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
