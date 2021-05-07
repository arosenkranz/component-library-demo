import { createGlobalStyle } from 'styled-components';
import { primaryFont, secondaryFont } from './typography';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: ${secondaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 90%;
  margin: 4rem auto;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${primaryFont};
  
}

`;
