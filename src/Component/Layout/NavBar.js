import React from 'react';
import './NavBar.css';
import logoIneuron from '../../assets/logo/ineuron-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const NavBar = () => {
  const [courses, setCourses] = useState(true);
  const [company, setCompany] = useState(true);
  const navCoursesHandler = () => {
    setCourses(!courses);
    console.log('hello');
  };
  const navCompanyHandler = () => {
    setCompany(!company);
  };
  return (
    <div className='nav__container'>
      <div className='nav__line-1 flex'>
        <div className='nav__logo'>
          <img
            src={logoIneuron}
            alt='ineuron-logo.png'
            className='nav__logo-img'
          />
        </div>

        <input type='text' placeholder='What do you want to learn' />
        <button>Sign up</button>
        <button>Sign in</button>
      </div>
      <div className='nav__line-2 flex'>
        <button className='dropdown__btn' onClick={navCoursesHandler}>
          Courses <FontAwesomeIcon icon={faChevronDown} />
        </button>
        {!courses && (
          <div className='dropdown__content-course dropdown__background'>
            <a href='#'>DATA SCIENCE</a>
            <a href='#'>BIG DATA </a>
            <a href='#'>DATA ANALYTICS</a>
            <a href='#'>WEB DEVELOPMENT</a>
            <a href='#'>BLOCKCHAIN</a>
            <a href='#'>PROGRAMING</a>
            <a href='#'>SYBER SECURITY</a>
            <a href='#'>TESTING</a>
            <a href='#'>DIGITAL MARKETING</a>
            <a href='#'>CLOUD</a>
            <a href='#'>DEVOPS</a>
            <a href='#'>IOT</a>
            <a href='#'>RPA</a>
            <a href='#'></a>
            <a href='#'>AR VR</a>
            <a href='#'>SALESFORSE</a>
            <a href='#'>DTATA STRUCTURE</a>
            <a href='#'>SYSTEM DESIGN</a>
            <a href='#'>DATABASE</a>
            <a href='#'>APTITUDE</a>
            <a href='#'>RESUME</a>
            <a href='#'>K12</a>
          </div>
        )}
        <a href='#'>One Neuron</a>
        <a href='#'>Job portal</a>
        <a href='#'>Become an affiliate</a>
        <a href='#'>Hall of fame</a>
        <a href='#'>Internship</a>

        <button className='dropdown__btn' onClick={navCompanyHandler}>
          Company <FontAwesomeIcon icon={faChevronDown} />
          <i className='fa fa-caret-down'></i>
        </button>
        {!company && (
          <div className='dropdown__content-company dropdown__background flex'>
            <div className='flex-column'>
              <a href='#'>About us</a>
              <a href='#'>Hack-A-Thon</a>
              <a href='#'>Job guarantee</a>
              <a href='#'>Privacy Policy</a>
            </div>
            <div className='flex-column'>
              <a href='#'>Contract us</a>
              <a href='#'>FAQs</a>
              <a href='#'>Job assistance</a>
              <a href='#'>Terms & Conditions</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
