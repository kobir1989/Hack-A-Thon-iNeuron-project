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
        <button className='btn'>Sign up</button>
        <button className='btn'>Sign in</button>
      </div>
      <div className='nav__line-2 flex'>
        <button className='dropdown__btn' onClick={navCoursesHandler}>
          Courses <FontAwesomeIcon icon={faChevronDown} />
        </button>
        {!courses && (
          <div className='dropdown__content-course '>
            <div className='left'>
              <h5>DATA SCIENCE </h5>
              <h5>BIG DATA </h5>
              <h5>DATA ANALYTICS</h5>
              <h5>WEB DEVELOPMENT</h5>
              <h5>BLOCKCHAIN</h5>
              <h5>PROGRAMING</h5>
              <h5>SYBER SECURITY</h5>
              <h5>TESTING</h5>
              <h5>DIGITAL MARKETING</h5>
              <h5>CLOUD</h5>
              <h5>DEVOPS</h5>
              <h5>IOT</h5>
              <h5>RPA</h5>
            </div>
            <div className='right'>
              <h5>AR VR</h5>
              <h5>SALESFORSE</h5>
              <h5>DTATA STRUCTURE</h5>
              <h5>SYSTEM DESIGN</h5>
              <h5>DATABASE</h5>
              <h5>APTITUDE</h5>
              <h5>RESUME</h5>
              <h5>K12</h5>
            </div>
          </div>
        )}
        <h5>One Neuron</h5>
        <h5>Job portal</h5>
        <h5>Become an affiliate</h5>
        <h5>Hall of fame</h5>
        <h5>Internship</h5>

        <button className='dropdown__btn' onClick={navCompanyHandler}>
          Company <FontAwesomeIcon icon={faChevronDown} />
          <i className='fa fa-caret-down'></i>
        </button>
        {!company && (
          <div className='dropdown__content-company dropdown__background flex'>
            <div className='flex-column'>
              <h5>About us</h5>
              <h5>Hack-A-Thon</h5>
              <h5>Job guarantee</h5>
              <h5>Privacy Policy</h5>
            </div>
            <div className='flex-column'>
              <h5>Contract us</h5>
              <h5>FAQs</h5>
              <h5>Job assistance</h5>
              <h5>Terms & Conditions</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
