import React, { ReactElement, useState } from "react";
import "./App.css";
import AllPokemon from "./components/AllPokemon";
import Header from "./components/Header";
import pokemonData from "./data";
import GlobalStyle from "./globalStyles";
import useDarkMode from "./hooks/useDarkMode";
import { ThemeProvider } from "styled-components";

const App = (): ReactElement => {
  const [isShiny, setIsShiny] = useState(false);
  const [isDarkMode] = useDarkMode();
  const themeMode = isDarkMode ? darkTheme : lightTheme;

  return (
    <div className="App">
      <ThemeProvider theme={{ themeMode }}>
        <GlobalStyle />
        <Header isShiny={isShiny} setIsShiny={setIsShiny} />
        <h1>Adam Hinton</h1>
        <AllPokemon pokemonData={pokemonData} isShiny={isShiny} />
      </ThemeProvider>
    </div>
  );
};

export default App;

export const lightTheme = {};
export const darkTheme = {};
