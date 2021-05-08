import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { theme, typeScale, primaryFont } from '../../utils';

const VARIANTS = {
  LEFT: 'left',
  RIGHT: 'right',
};

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.variant === VARIANTS.RIGHT &&
    css`
      flex-direction: row-reverse;
    `}

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

Header.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  variant: 'left',
};

export const Nav = styled.nav`
  font-family: ${primaryFont};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 24px 0;

  > * {
    margin: 12px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export const NavItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 0;
  font-size: ${typeScale.header4};
  color: ${theme.nav.link};
  background: none;
  border: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${theme.nav.hover};
  }
`;

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
};
