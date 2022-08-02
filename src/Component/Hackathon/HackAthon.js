import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HackAthon.css';
import hackAThon1 from '../../assets/logo/zensar.png';
import hackAThon2 from '../../assets/logo/wipro.png';
import HackAThon3 from '../../assets/logo/wellnesys.png';
import HackAThon4 from '../../assets/logo/nvidia.png';
import HackAThon5 from '../../assets/logo/tataiq.png';
function HackAthon() {
  const [slider, setSlider] = useState();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 1200,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <div className='hack-a-thon__container'>
      <h2>Hackathon Companies</h2>

      <div className='hack-a-thon__logo'>
        <Slider
          {...settings}
          asSliderFor={slider}
          reference={(slider) => setSlider(slider)}
        >
          <div>
            <div className='company__logo'>
              <img src={hackAThon1} />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={hackAThon2} />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={HackAThon3} />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={HackAThon4} />
            </div>
          </div>
          <div>
            <div className='company__logo'>
              <img src={HackAThon5} />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HackAthon;
