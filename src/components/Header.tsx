// import React from 'react';
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div id='top-bar'>
        <img src={logo} className="logo" alt="unit-converter-logo" />
        <h1 className='header-text'>unit converter</h1>
    </div>
  );
}

export default Header;