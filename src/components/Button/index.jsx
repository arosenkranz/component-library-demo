import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { theme, typeScale, primaryFont } from '../../utils';

const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const SIZES = {
  DEFAULT: 'default',
  SMALL: 'small',
  LARGE: 'large',
};

const setVariantStyles = ({ variant }) => {
  if (variant === VARIANTS.PRIMARY) {
    return css`
      background-color: ${theme.button.primary.bg};
      border: 1px solid ${theme.button.primary.bg};
      color: ${theme.button.primary.text};
      &:hover {
        background-color: ${theme.button.primary.bgHover};
        color: ${theme.button.primary.textHover};
      }
    `;
  } else if (variant === VARIANTS.SECONDARY) {
    return css`
      background-color: ${theme.button.secondary.bg};
      color: ${theme.button.secondary.text};
      border: 2px solid ${theme.button.secondary.border};
      &:hover {
        background-color: ${theme.button.secondary.bgHover};
        color: ${theme.button.secondary.textHover};
      }
    `;
  }
};

const setSizeStyles = ({ size }) => {
  if (size === SIZES.SMALL) {
    return css`
      font-size: ${typeScale.paragraph};
      padding: 8px;
    `;
  } else if (size === SIZES.LARGE) {
    return css`
      font-size: ${typeScale.header3};
      padding: 16px 24px;
    `;
  }
};

const setDisabledStyles = ({ disabled }) =>
  disabled &&
  css`
    background: none !important;
    color: ${theme.button.disabled.text} !important;
    border: 1px solid ${theme.button.disabled.text} !important;
    cursor: not-allowed;
    &:hover {
      box-shadow: none !important;
    }
  `;

const StyledButton = styled.button`
  border-radius: none;
  display: inline-block;
  min-width: 75px;
  cursor: pointer;
  font-family: ${primaryFont};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  padding: 12px 16px;
  font-size: ${typeScale.header5};

  &:hover {
    box-shadow: 0 5px 5px rgba(0, 0, 255, 0.25);
  }

  &:focus {
    outline: 2px solid ${theme.button.primary.bgHover};
    outline-offset: 2px;
  }

  ${setVariantStyles}
  ${setSizeStyles}
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
