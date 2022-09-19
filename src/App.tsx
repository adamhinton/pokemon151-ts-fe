import React, { ReactElement } from "react";
import "./App.css";
import AllPokemon from "./components/AllPokemon";
import pokemonData from "./data";
import GlobalStyle from "./globalStyles";

const App = (): ReactElement => {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Adam Hinton</h1>
      <AllPokemon isShiny={true} pokemonData={pokemonData} />
    </div>
  );
};

export default App;
