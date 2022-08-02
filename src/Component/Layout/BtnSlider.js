import React from 'react';
import './BtnSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'slider__btn next' : 'slider__btn prev'}
    >
      {direction === 'next' ? (
        <FontAwesomeIcon icon={faChevronRight} className='icon' />
      ) : (
        <FontAwesomeIcon icon={faChevronLeft} className='icon' />
      )}
    </button>
  );
};

export default BtnSlider;
