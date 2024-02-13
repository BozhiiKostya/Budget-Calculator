import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`



body {

  height: 100%;
  width: 100%;
  /* padding-top: 110px; */
  color: #333333;
  box-sizing: border-box;
  margin: 0;
 font-family: 'Montserrat', sans-serif;
 font-weight: 400;
}

h1, h2,h3
,h4 , p {
  margin: 0;
}
ul {
  margin: 0;
  padding-left: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #000
}

button {
  border: none;
  color: inherit; 
  padding: 0;
  margin: 0;
}

.container {
  width: 100vw;
  max-width: 1250px;
  padding: 0 20px;
  margin: 0 auto;
}
`;
