import React from 'react';
import { GlobalStyle } from './utils';
import { Logo } from './components/Logo';
import { Header, Nav, NavItem } from './components/Nav';

function App() {
  return (
    <main>
      <GlobalStyle />
      <Header>
        <Logo href='#' />
        <Nav>
          <NavItem href='#'>Home</NavItem>
          <NavItem href='#'>About</NavItem>
          <NavItem href='#'>Shop</NavItem>
          <NavItem href='#'>Contact</NavItem>
        </Nav>
      </Header>
    </main>
  );
}

export default App;
