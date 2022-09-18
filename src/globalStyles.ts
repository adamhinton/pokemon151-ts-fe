import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  max-width: 100%;
  box-sizing: border-box;
}

body {
  background-color: #3c9893;
  font-family: "Ubuntu", sans-serif;
  margin: 0;
  text-align: center;
  /* Below is darkmode stuff */
  --button-text: #000;
  --button-bg: #fff;
}

// I use this for lots of different elements in SinglePokemon. I couldn't figure out a more optimal way than just using this class. 
// Otherwise I would have to make a bunch of different styled components just for this one margin.
.card-item{
    margin: 3%;
}
`;

export default GlobalStyle;
