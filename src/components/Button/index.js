import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { defaultTheme, typeScale } from '../../utils';

const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

const SIZES = {
  DEFAULT: 'default',
  SMALL: 'small',
  LARGE: 'large',
};

const setDisabledStyles = ({ disabled, variant }) => {
  if (disabled && variant === VARIANTS.PRIMARY) {
    return css`
      background: none !important;
      color: ${defaultTheme.textColorDisabled} !important;
      border: 1px solid ${defaultTheme.textColorDisabled} !important;
      cursor: not-allowed;
      filter: none !important;
    `;
  } else if (disabled && variant === VARIANTS.SECONDARY) {
    return css`
      background: ${defaultTheme.backgroundColorDisabled} !important;
      color: ${defaultTheme.textColorDisabled} !important;
      border: 1px solid ${defaultTheme.backgroundColorDisabled} !important;
      cursor: not-allowed;
      filter: none !important;
    `;
  } else if (disabled && variant === VARIANTS.TERTIARY) {
    return css`
      background: ${defaultTheme.backgroundColorDisabled} !important;
      color: ${defaultTheme.textColorDisabled} !important;
      cursor: not-allowed;
      filter: none !important;
    `;
  }
};

const dropShadow = 'drop-shadow(0px 5px 5px  rgba(0, 0, 255, 0.25));';
const tertiaryDropShadow = 'drop-shadow(0px 4px 3px rgba(0, 0, 255, 0.7));';

const StyledButton = styled.button`
  border-radius: 50px;
  display: inline-block;
  min-width: 75px;
  cursor: pointer;
  font-family: ${defaultTheme.buttonFont};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  padding: 12px 16px;
  font-size: ${typeScale.header5};

  ${(props) =>
    props.variant === VARIANTS.PRIMARY &&
    css`
      background-color: ${defaultTheme.primaryColor};
      border: 1px solid ${defaultTheme.primaryColor};
      color: ${defaultTheme.textColorOnPrimary};
      &:hover {
        background-color: ${defaultTheme.primaryHover};
        color: ${defaultTheme.textPrimaryHover};
        filter: ${dropShadow};
      }
      &:focus {
        background-color: ${defaultTheme.primaryFocus};
        outline: 2px solid ${defaultTheme.focusBorder};
        outline-offset: 2px;
        color: ${defaultTheme.textPrimaryFocus};
      }
    `}

  ${(props) =>
    props.variant === VARIANTS.SECONDARY &&
    css`
      background-color: ${defaultTheme.secondaryColor};
      color: ${defaultTheme.textColorOnSecondary};
      border: 1px solid ${defaultTheme.textColorOnSecondary};
      &:hover {
        background-color: ${defaultTheme.secondaryHover};
        color: ${defaultTheme.textSecondaryHover};
        filter: ${dropShadow};
      }
      &:focus {
        background-color: ${defaultTheme.primaryFocus};
        outline: 2px solid ${defaultTheme.focusBorder};
        outline-offset: 2px;
        color: ${defaultTheme.textPrimaryFocus};
      }
    `}

  ${(props) =>
    props.variant === VARIANTS.TERTIARY &&
    css`
      border: none;
      background-color: transparent;
      color: ${defaultTheme.tertiaryColor};
      font-family: ${defaultTheme.buttonFont};
      font-size: ${typeScale.header5};
      &:hover {
        filter: ${tertiaryDropShadow};
      }
      &:focus {
        color: ${defaultTheme.tertiaryFocus};
        outline: 2px solid ${defaultTheme.focusBorder};
        outline-offset: 2px;
      }
    `}

  ${(props) =>
    props.size === SIZES.SMALL &&
    css`
      font-size: ${typeScale.paragraph};
      padding: 8px;
    `}

  ${(props) =>
    props.size === SIZES.LARGE &&
    css`
      font-size: ${typeScale.header3};
      padding: 16px 24px;
    `}

  ${setDisabledStyles}
`;

const ButtonLink = StyledButton.withComponent('a');

export const Button = (props) => {
  return props.href ? (
    <ButtonLink href={props.href} {...props} />
  ) : (
    <StyledButton {...props} />
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
  href: PropTypes.string,
};

Button.defaultProps = {
  variant: VARIANTS.PRIMARY,
  disabled: false,
  size: SIZES.DEFAULT,
  href: undefined,
};

export default Button;
