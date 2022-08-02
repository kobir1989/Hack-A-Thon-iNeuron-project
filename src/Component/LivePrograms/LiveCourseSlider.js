import React, { useState } from 'react';
import './LiveCourseSlider.css';
import '../HallOfFame/HallOfFame.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../Layout/Button';
import course1 from '../../assets/course-img/course1.jpg';
import course2 from '../../assets/course-img/course2.jpg';
import course3 from '../../assets/course-img/course3.jpg';
import course4 from '../../assets/course-img/course4.jpg';
import course5 from '../../assets/course-img/course5.jpg';
import course6 from '../../assets/course-img/course6.jpg';

const LiveCourseSlider = () => {
  const [slider, setSlider] = useState();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <div className='course__container'>
      <div className='hall-of-fame__slider'>
        <Slider
          {...settings}
          asSliderFor={slider}
          reference={(slider) => setSlider(slider)}
        >
          <div>
            <div className='course__card'>
              <img id='course-card__img' src={course1} alt='' />
              <h3>Big Data Boot Camp</h3>
              <h4>$29.99</h4>
              <Button>Live Class</Button>
              <div className='card-icon'></div>
            </div>
          </div>
          <div>
            <div className='course__card'>
              <img id='course-card__img' src={course2} alt='' />
              <h3>Python</h3>
              <h4>$18.99</h4>
              <Button>Live Class</Button>
              <div className='card-icon'></div>
            </div>
          </div>
          <div>
            <div className='course__card'>
              <img id='course-card__img' src={course3} alt='' />
              <h3>Youtube Mastery</h3>
              <h4>$45.99</h4>
              <Button>Live Class</Button>
              <div className='card-icon'></div>
            </div>
          </div>
          <div>
            <div className='course__card'>
              <img id='course-card__img' src={course4} alt='' />
              <h3>Digital Marketing</h3>
              <h4>$21.99</h4>
              <Button>Live Class</Button>
              <div className='card-icon'></div>
            </div>
          </div>
          <div>
            <div className='course__card'>
              <img id='course-card__img' src={course5} alt='' />
              <h3>FaceBook Marketing</h3>
              <h4>$25.99</h4>
              <Button>Live Class</Button>
              <div className='card-icon'></div>
            </div>
          </div>
          <div>
            <div className='course__card'>
              <img id='course-card__img' src={course6} alt='' />
              <h3>DSA for FAANG</h3>
              <h4>$31.99</h4>
              <Button>Live Class</Button>
              <div className='card-icon'></div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LiveCourseSlider;
