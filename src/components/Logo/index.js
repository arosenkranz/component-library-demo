import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { defaultTheme, typeScale } from '../../utils';

const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const StyledLogo = styled.div`
  font-family: ${defaultTheme.logoFont};
  font-size: ${typeScale.logo};
  text-decoration: none;
  padding: 32px 40px;
  border-width: 2px;
  border-style: solid;
  display: inline-block;
  transition: box-shadow 0.2s ease-in-out, text-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 255, 0.25);
    text-shadow: 0 8px 4px rgba(0, 0, 255, 0.25);
  }

  ${(props) =>
    props.variant === VARIANTS.PRIMARY &&
    css`
      color: ${defaultTheme.primaryLogoTextColor};
      border-color: ${defaultTheme.primaryLogoBorder};
    `}

  ${(props) =>
    props.variant === VARIANTS.SECONDARY &&
    css`
      color: ${defaultTheme.secondaryLogoTextColor};
      border-color: ${defaultTheme.secondaryLogoBorder};
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
