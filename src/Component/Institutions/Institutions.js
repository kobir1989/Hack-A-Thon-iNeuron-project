import React from 'react';
import './Institutions.css';
import insLogo1 from '../../assets/inst/keit.svg';
import insLogo2 from '../../assets/inst/gim.svg';
import insLogo3 from '../../assets/inst/malnad-college.svg';
import insLogo4 from '../../assets/inst/taxila.svg';
import insLogo5 from '../../assets/inst/vit.svg';
const Institutions = () => {
  return (
    <div className='institutions__container'>
      <h2>Our Partnered Institutions</h2>
      <div className='institutions__logo'>
        <div className='line__1'>
          <div className='ins__logos'>
            <img src={insLogo1} alt='' />
          </div>
          <div className='ins__logos'>
            <img src={insLogo2} alt='' />
          </div>
          <div className='ins__logos'>
            <img src={insLogo3} alt='' />
          </div>
        </div>
        <div className='line__2'>
          <div className='ins__logos'>
            <img src={insLogo4} alt='' />
          </div>
          <div className='ins__logos'>
            <img src={insLogo5} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutions;
