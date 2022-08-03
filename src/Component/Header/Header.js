import React from 'react';
import NavBar from '../Layout/NavBar';
import './Header.css';

import HeaderSlide from '../Layout/HeaderSlide';
const Header = () => {
  return (
    <div className='header__container'>
      <NavBar />

      <HeaderSlide />
    </div>
  );
};

export default Header;
