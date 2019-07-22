import React from 'react';

import Logo from '../assets/logo.svg';
import Account from '../assets/account.svg';

function Header() {
  return (
    <header id="main-header">
      <div className="content">
        <a href="#">
          <img src={Logo} alt="Facebook" />
        </a>
        <a className="account" href="#">
          Meu perfil
          <img src={Account} />
        </a>
      </div>
    </header>    
  );
}

export default Header;