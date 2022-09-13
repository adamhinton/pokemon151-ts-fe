import React, { ReactElement } from "react";
import "./App.css";
import pokemonData from "./data";

const App = (): ReactElement => {
  console.log("pokemonData:", pokemonData);
  return (
    <div className="App">
      <h1>Adam Hinton</h1>
    </div>
  );
};

export default App;
