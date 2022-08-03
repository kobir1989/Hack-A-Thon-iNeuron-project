import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__container-sub'>
        <div className='footer-info__1 info'>
          <div className='address '>
            <div className='icons'>
              <FaFacebookF className='social__icons facebook' />
              <AiFillLinkedin className='social__icons linked-in' />
              <AiFillYoutube className='social__icons youtube' />
              <AiOutlineTwitter className='social__icons twitter' />
            </div>
            <h4>iNeuron</h4>
          </div>
          <div className='address-text'>
            <p>
              17th Floor Tower A, Brigade Signature Towers,
              <br />
              Sannatammanahalli, Bengaluru, Karnataka 562129.
            </p>
            <p>Email us: contact@ineuron.ai</p>
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
