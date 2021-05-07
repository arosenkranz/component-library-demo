import { text, colors, neutral, red } from './colors';
import { secondaryFont, primaryFont } from './typography';

export const defaultTheme = {
  //Primary Button
  primaryColor: colors[500],
  textColorOnPrimary: text['light'],
  primaryHover: colors[500],
  textPrimaryHover: text['highlight'],

  // Secondary Button
  secondaryColor: neutral[100],
  textColorOnSecondary: text['dark'],
  secondaryBorder: colors[600],
  secondaryHover: neutral[100],
  textSecondaryHover: text['highlight'],

  // Tertiary Button
  tertiaryColor: neutral[600],
  tertiaryBackground: neutral[100],
  textColorInverted: text['light'],
  buttonFont: secondaryFont,
  //Button Hover
  hoverBorder: colors[300],

  //Button Focus
  focusBorder: text['highlight'],
  primaryFocus: colors[500],
  secondaryFocus: neutral[100],
  tertiaryFocus: text['highlight'],
  textPrimaryFocus: text['light'],

  //Button Disabled
  textColorDisabled: neutral[600],
  backgroundColorDisabled: neutral[300],
  textColor: text['dark'],

  //Logo
  logoFont: primaryFont,
  primaryLogoTextColor: colors[400],
  primaryLogoBorder: colors[400],
  secondaryLogoTextColor: neutral[600],
  secondaryLogoBorder: neutral[600],

  //Text field
  textFieldFont: secondaryFont,
  textFieldBackground: neutral[200],
  textFieldLabel: neutral[500],
  textFieldInput: text['highlight'],
  textFieldErrorLabel: red[100],
  textFieldErrorInput: neutral[600],

  //Nav
  navLink: neutral['600'],
  navLinkHover: neutral['400'],
};

export default defaultTheme;
