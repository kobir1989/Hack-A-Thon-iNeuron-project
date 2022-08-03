import React from 'react';
import './LivePrograms.css';
import Button from '../Layout/Button';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const LivePrograms = () => {
  return (
    <div className='live-program__container'>
      <h2>What you will learn</h2>
      <div className='courses__btn'>
        <Button>Live Programs</Button>
        <Button>Affordable Programs</Button>
        <Button>Community Programs</Button>
        <Button>One Neuron</Button>
        <Button>Test Series</Button>
      </div>
      <div className='input__field'>
        <select id='courses'>
          <option className='option__class'>Live Programs</option>
          <option className='option__class'>Live Programs</option>
          <option className='option__class'>Community Programs</option>
          <option className='option__class'>Test Series</option>
        </select>
      </div>
      <div className='courses__text'>
        <h2>Live Programs</h2>
        <p>Get your program with live "instructor led" learning.</p>
      </div>
    </div>
  );
};

export default LivePrograms;
