import React from 'react';
import Carrinho from './Carrinho';

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Carrinho />
      </div>
    </nav>
  );
}

export default Header;
