import React from 'react';
import { GlobalStyle } from './utils';
import { Button } from './components/Button';
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
      <div style={{ margin: '16px 0' }}>
        <Button>This is a button</Button>
      </div>
      <div style={{ margin: '16px 0' }}>
        <Button variant='secondary'>This is a secondary button</Button>
      </div>
      <div style={{ margin: '16px 0' }}>
        <Button size='small'>This is a small button</Button>
      </div>
      <div style={{ margin: '16px 0' }}>
        <Button size='large' variant='secondary'>
          This is a large secondary button
        </Button>
      </div>
      <div style={{ margin: '16px 0' }}>
        <Button disabled>This is a disabled button</Button>
      </div>
    </main>
  );
}

export default App;
