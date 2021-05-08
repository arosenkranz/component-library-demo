import { blue, neutral } from './colors';

export const theme = {
  button: {
    primary: {
      bg: blue[400],
      text: blue[100],
      bgHover: blue[500],
      textHover: blue[200],
    },
    secondary: {
      bg: blue[100],
      text: blue[400],
      border: blue[400],
      bgHover: blue[200],
      textHover: blue[500],
    },
    disabled: {
      text: neutral[600],
      bg: neutral[300],
    },
  },
  logo: {
    primary: {
      text: blue[400],
      border: blue[400],
    },
    secondary: {
      text: neutral[600],
      border: neutral[600],
    },
  },
  nav: {
    link: blue[300],
    hover: blue[500],
  },
};
