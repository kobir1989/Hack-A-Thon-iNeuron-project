import React from 'react';
import NavBar from '../Layout/NavBar';
import { loadFull } from 'tsparticles';
import './Header.css';
import Particles from 'react-particles';
import HeaderSlide from '../Layout/HeaderSlide';
import particlesOptions from '../../particles.json';
const Header = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };
  return (
    <div className='header__container'>
      <NavBar />
      <Particles options={particlesOptions} init={particlesInit} />
      <HeaderSlide />
    </div>
  );
};

export default Header;
