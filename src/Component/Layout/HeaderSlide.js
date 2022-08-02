import React, { useState } from 'react';
import BtnSlider from './BtnSlider';
import './HeaderSlide.css';
import DataSlider from './DataSlider';

const HeaderSlide = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== DataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DataSlider.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(DataSlider.length);
    }
  };
  const moveSmRound = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className='slider__container'>
      {DataSlider.map((obj, index) => {
        return (
          <div
            className={
              slideIndex === index + 1
                ? 'header__slider active-slide'
                : 'header__slider'
            }
          >
            <div className='header__text'>
              <h3>{obj.subTitle}</h3>

              <h1>{obj.title}</h1>
              <p>{obj.smallTitle}</p>
            </div>
            <div className='cover__img'>
              <img
                src={
                  process.env.PUBLIC_URL + `/header-img/cover${index + 1}.svg`
                }
                alt=''
              />
            </div>
          </div>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      <div className='Container__sm-round'>
        {Array.from({ length: 3 }).map((item, index) => {
          return (
            <div
              onClick={() => moveSmRound(index + 1)}
              className={
                slideIndex === index + 1
                  ? 'sm-round sm-round-active'
                  : 'sm-round'
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderSlide;
