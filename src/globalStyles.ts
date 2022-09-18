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

.card-item{
    margin: 3%;
}
`;

export default GlobalStyle;
