import './TechAvengers.css';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../HallOfFame/HallOfFame.css';
import student1 from '../../assets/students/student1.jpg';
import student2 from '../../assets/students/student2.jpg';
import student3 from '../../assets/students/student3.jpg';
import student4 from '../../assets/students/student4.jpg';
import student5 from '../../assets/students/student5.jpg';
import student6 from '../../assets/students/student6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TechAvengers = () => {
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className='hall-of-fame__container'>
      <h2>Tech Avengers</h2>
      <div className='hall-of-fame__slider'>
        <Slider
          {...settings}
          asSliderFor={slider}
          reference={(slider) => setSlider(slider)}
        >
          <div>
            <div className='Avengers__card'>
              <img src={student1} alt='' />
              <h3>Preson-1</h3>
              <p>Position</p>

              <div className='card-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={student2} alt='' />
              <h3>Preson-2</h3>
              <p>Position</p>

              <div className='card-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={student3} alt='' />
              <h3>Preson-3</h3>
              <p>Position</p>

              <div className='card-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={student4} alt='' />
              <h3>Preson-4</h3>
              <p>Position</p>

              <div className='card-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={student5} alt='' />
              <h3>Preson-5</h3>
              <p>Position</p>

              <div className='card-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={student6} alt='' />
              <h3>Preson-6</h3>
              <p>Position</p>

              <div className='card-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TechAvengers;
