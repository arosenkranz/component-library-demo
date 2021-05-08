import React from 'react';

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { theme, typeScale, primaryFont } from '../../utils';

const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const StyledLogo = styled.div`
  font-family: ${primaryFont};
  font-size: ${typeScale.logo};
  text-decoration: none;
  padding: 12px 20px;
  border-width: 2px;
  border-style: dashed;
  display: inline-block;
  transition: box-shadow 0.2s ease-in-out, text-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 255, 0.25);
    text-shadow: 0 8px 4px rgba(0, 0, 255, 0.25);
  }

  ${(props) =>
    props.variant === VARIANTS.PRIMARY &&
    css`
      color: ${theme.logo.primary.text};
      border-color: ${theme.logo.primary.border};
    `}

  ${(props) =>
    props.variant === VARIANTS.SECONDARY &&
    css`
      color: ${theme.logo.secondary.text};
      border-color: ${theme.logo.secondary.border};
    `}
`;

const LogoLink = StyledLogo.withComponent('a');

export const Logo = (props) =>
  props.href ? (
    <LogoLink {...props}>Company + Logo</LogoLink>
  ) : (
    <StyledLogo {...props}>Company + Logo</StyledLogo>
  );

Logo.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  href: PropTypes.string,
};

Logo.defaultProps = {
  variant: VARIANTS.PRIMARY,
  href: undefined,
};

export default Logo;
