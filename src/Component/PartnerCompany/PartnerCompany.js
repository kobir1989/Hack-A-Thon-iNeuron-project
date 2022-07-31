import React from 'react';
import logo1 from '../../assets/logo/affine.png';
import logo2 from '../../assets/logo/boeing.png';
import logo3 from '../../assets/logo/bun&bradstreet.png';
import logo4 from '../../assets/logo/cohesity.png';
import logo5 from '../../assets/logo/eminds.png';
import logo6 from '../../assets/logo/freshworks.png';
import logo7 from '../../assets/logo/geekyants.png';
import logo8 from '../../assets/logo/github.png';
import logo9 from '../../assets/logo/greendeck.png';

import './PartnerCompany.css';
function PartnerCompany() {
  return (
    <div className='partner__container'>
      <div className='partner__heading'>
        <h2>Our Achiever's Work with</h2>
      </div>
      <div className='partner__logo'>
        <div className='company__logo'>
          <img src={logo1} />
        </div>
        <div className='company__logo'>
          <img src={logo2} />
        </div>
        <div className='company__logo'>
          <img src={logo3} />
        </div>
        <div className='company__logo'>
          <img src={logo4} />
        </div>
        <div className='company__logo'>
          <img src={logo5} />
        </div>
        <div className='company__logo'>
          <img src={logo6} />
        </div>
        <div className='company__logo'>
          <img src={logo7} />
        </div>
        <div className='company__logo'>
          <img src={logo8} />
        </div>
        <div className='company__logo'>
          <img src={logo9} />
        </div>
      </div>
    </div>
  );
}

export default PartnerCompany;
