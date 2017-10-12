import React from 'react';
import Logo from '../../images/brandfolder-logo.png';
import Styles from './Header.scss';
import Nav from '../Nav/Nav';

function Header () {
  return (
    <header className={ Styles.header } role='navigation'>
      <img className={ Styles.header__logo } src={ Logo } alt='logo' />
      <Nav />
    </header>
  );
}

export default Header;
