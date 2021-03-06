import * as React from 'react';
import Logo from '../Logo/Logo';
import { StyledNav } from './Nav.style';

const Nav = (): JSX.Element => (
  <StyledNav data-testid="nav">
    <Logo />
  </StyledNav>
);

export default Nav;
