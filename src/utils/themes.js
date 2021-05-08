import { blue, neutral } from './colors';

export const theme = {
  button: {
    primary: {
      bg: blue[400],
      text: neutral[100],
      bgHover: blue[500],
      textHover: neutral[100],
    },
    secondary: {
      bg: neutral[100],
      text: blue[500],
      border: blue[400],
      bgHover: blue[400],
      textHover: neutral[100],
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
    link: blue[400],
    hover: blue[500],
  },
};
