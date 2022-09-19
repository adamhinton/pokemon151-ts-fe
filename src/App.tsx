import React, { ReactElement, useState } from "react";
import "./App.css";
import AllPokemon from "./components/AllPokemon";
import Header from "./components/Header";
import pokemonData from "./data";
import GlobalStyle from "./globalStyles";

const App = (): ReactElement => {
  const [isShiny, setIsShiny] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      {/* TODO: fix the shiny stuff */}
      <Header isShiny={isShiny} setIsShiny={setIsShiny} />
      <h1>Adam Hinton</h1>
      <AllPokemon pokemonData={pokemonData} isShiny={isShiny} />
    </div>
  );
};

export default App;
