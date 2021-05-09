import React from 'react';
import { GlobalStyle } from './utils';
import { Logo } from './components/Logo';
import { Header, Nav, NavItem } from './components/Nav';
import { Button } from './components/Button';

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
      <div style={{ margin: '16px 0' }}>
        <Button variant='primary'>This is a primary button</Button>
      </div>
      <div style={{ margin: '16px 0' }}>
        <Button variant='secondary'>This is a secondary button</Button>
      </div>
      <div style={{ margin: '16px 0' }}>
        <Button>This button has no props</Button>
      </div>
      <div style={{ margin: '16px 0' }}>
        <Button variant='tertiary'>
          This button has an incorrect variant property
        </Button>
      </div>
    </main>
  );
}

export default App;
