import React, { ReactElement } from "react";
import "./App.css";
import AllPokemon from "./components/AllPokemon";
import pokemonData from "./data";

const App = (): ReactElement => {
  console.log("pokemonData:", pokemonData);
  return (
    <div className="App">
      <h1>Adam Hinton</h1>
      <AllPokemon isShiny={true} pokemonData={pokemonData} />
    </div>
  );
};

export default App;
