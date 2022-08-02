import React from 'react';
import './Footer.css';
import facebook from '../../assets/svg-icon/facebook.svg';
import linkedIn from '../../assets/svg-icon/linkedin-in.svg';
import twitter from '../../assets/svg-icon/twitter.svg';
import youtube from '../../assets/svg-icon/youtube.svg';
import email from '../../assets/svg-icon/email.svg';
import location from '../../assets/svg-icon/location.svg';
const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__container-sub'>
        <div className='footer-info__1 info'>
          <div className='address '>
            <h4>iNeuron</h4>
            <div className='icons'>
              <img src={facebook} alt='' />
              <img src={linkedIn} alt='' />
              <img src={twitter} alt='' />
              <img src={youtube} alt='' />
            </div>
          </div>
          <div className='address-text'>
            <p>
              <img src={location} alt='' className='footer__icon' />
              17th Floor Tower A, Brigade Signature Towers,
              <br />
              Sannatammanahalli, Bengaluru, Karnataka 562129.
            </p>
            <p>
              <img src={email} alt='' className='footer__icon' /> Email us:
              contact@ineuron.ai
            </p>
          </div>
        </div>
        <div className='footer-info__2 info'>
          <h4>Company</h4>

          <div className=' footer-nav__items'>
            <ul>
              <li>About us</li>
              <li>Hack-A-Thon</li>
              <li>Job guarantee</li>
              <li>Privacy policy</li>
            </ul>
            <ul>
              <li>Contact us</li>
              <li>FAQs</li>
              <li>Job assistance</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
        </div>
        <div className='footer-info__3 info'>
          <h4>Products</h4>
          <ul>
            <li>Job Portal</li>
            <li>Internship portal</li>
            <li>Become an affiliate</li>
            <li>Hall of fame</li>
            <li>InBlog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
