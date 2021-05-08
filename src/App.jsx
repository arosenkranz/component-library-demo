import React from 'react';
import { GlobalStyle } from './utils';
import { Logo } from './components/Logo';
import { Header, Nav, NavItem } from './components/Nav';
#step-1_1

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
      #step-1_2
    </main>
  );
}

export default App;
