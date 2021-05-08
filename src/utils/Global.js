import { createGlobalStyle } from 'styled-components';
import { primaryFont, secondaryFont, typeScale } from './typography';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 18px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  line-height: 1.75;
  font-size: ${typeScale.paragraph};
  font-family: ${secondaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 90%;
  margin: 4rem auto;
}

p {
  font-size: ${typeScale.paragraph};
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${primaryFont};
  margin: 3rem 0 1.38rem;
}

h1 {
  margin-top: 0;
  font-size: ${typeScale.header1};
}

h2 {
  font-size: ${typeScale.header2};
}

h3 {
  font-size: ${typeScale.header3};
}

h4 {
  font-size: ${typeScale.header4};
}

h5 {
  font-size: ${typeScale.header5};
}

small, .text_small {
  font-size: ${typeScale.helperText};
}

`;
