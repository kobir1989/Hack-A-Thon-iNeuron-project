import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HallOfFame.css';
import student1 from '../../assets/students/student1.jpg';
import student2 from '../../assets/students/student2.jpg';
import student3 from '../../assets/students/student3.jpg';
import student4 from '../../assets/students/student4.jpg';
import student5 from '../../assets/students/student5.jpg';
import student6 from '../../assets/students/student6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HallOfFame = () => {
  const [slider, setSlider] = useState();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    cssEase: 'linear',
  };
  return (
    <div className='hall-of-fame__container'>
      <h2>Hall of fame</h2>
      <div className='hall-of-fame__slider'>
        <h4></h4>
        <Slider
          {...settings}
          asSliderFor={slider}
          reference={(slider) => setSlider(slider)}
        >
          <div>
            <div className='slider__card'>
              <img src={student1} />
              <h3>Student-1</h3>
              <p>Compnay Name</p>
              <p>
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab,
                amet'
              </p>
              <div className='card-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div>
            <div className='slider__card'>
              <img src={student2} />
              <h3>Student-2</h3>
              <p>Compnay Name</p>
              <p>
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab,
                amet'
              </p>
              <div className='card-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div>
            <div className='slider__card'>
              <img src={student3} />
              <h3>Student-3</h3>
              <p>Compnay Name</p>
              <p>
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab,
                amet'
              </p>
              <div className='card-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div>
            <div className='slider__card'>
              <img src={student4} />
              <h3>Student-4</h3>
              <p>Compnay Name</p>
              <p>
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab,
                amet'
              </p>
              <div className='card-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div>
            <div className='slider__card'>
              <img src={student5} />
              <h3>Student-5</h3>
              <p>Compnay Name</p>
              <p>
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab,
                amet'
              </p>
              <div className='card-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div>
            <div className='slider__card'>
              <img src={student6} />
              <h3>Student-6</h3>
              <p>Compnay Name</p>
              <p>
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab,
                amet'
              </p>
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
export default HallOfFame;
