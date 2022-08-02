import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from '../../assets/logo/affine.png';
import logo2 from '../../assets/logo/boeing.png';
import logo3 from '../../assets/logo/bun&bradstreet.png';
import logo4 from '../../assets/logo/cohesity.png';
import logo5 from '../../assets/logo/eminds.png';
import logo6 from '../../assets/logo/freshworks.png';
import logo7 from '../../assets/logo/geekyants.png';
import logo8 from '../../assets/logo/github.png';
import logo9 from '../../assets/logo/greendeck.png';
import logo10 from '../../assets/logo/informatica.png';
import logo11 from '../../assets/logo/jetbrains.png';
import logo12 from '../../assets/logo/kpmg.png';
import logo13 from '../../assets/logo/learnyst.png';

import './PartnerCompany.css';
function PartnerCompany() {
  const [slider, setSlider] = useState();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 1200,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='partner__container'>
      <div className='partner__heading'>
        <h2>Our Achiever's Work with</h2>
      </div>
      <div className='logo__container'>
        <Slider
          {...settings}
          asSliderFor={slider}
          reference={(slider) => setSlider(slider)}
        >
          <div>
            <div className='company__logo'>
              <img src={logo1} alt='' />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={logo2} alt='' />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={logo3} alt='' />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={logo4} alt='' />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={logo5} alt='' />
            </div>
          </div>

          <div>
            <div className='company__logo'>
              <img src={logo6} alt='' />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={logo7} alt='' />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={logo8} alt='' />
            </div>
          </div>

          <div>
            <div className='company__logo'>
              <img src={logo9} alt='' />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={logo10} alt='' />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={logo11} alt='' />
            </div>
          </div>

          <div>
            <div className='company__logo'>
              <img src={logo12} alt='' />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={logo13} alt='' />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default PartnerCompany;
