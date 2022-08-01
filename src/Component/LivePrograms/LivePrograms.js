import React, { useState } from 'react';
import './LivePrograms.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const LivePrograms = () => {
  const [liveText, setLiveText] = useState(true);
  const [programsText, setProgramsText] = useState(false);
  const [communityText, setCommunityText] = useState(false);
  const [oneNeuronText, setOneNeuronText] = useState(false);
  const [seriesText, setSeriesText] = useState(false);
  const liveHandler = () => {
    setLiveText(true);
    setProgramsText(false);
    setCommunityText(false);
    setOneNeuronText(false);
    setSeriesText(false);
  };
  const programHandler = () => {
    setLiveText(false);
    setProgramsText(true);
    setCommunityText(false);
    setOneNeuronText(false);
    setSeriesText(false);
  };
  const communityHandler = () => {
    setLiveText(false);
    setProgramsText(false);
    setCommunityText(true);
    setOneNeuronText(false);
    setSeriesText(false);
  };
  const oneNeuronHandler = () => {
    setLiveText(false);
    setProgramsText(false);
    setCommunityText(false);
    setOneNeuronText(true);
    setSeriesText(false);
  };
  const seriesHandler = () => {
    setLiveText(false);
    setProgramsText(false);
    setCommunityText(false);
    setOneNeuronText(false);
    setSeriesText(true);
  };

  return (
    <div className='live-program__container'>
      <h2>What you will learn</h2>
      <div className='courses__btn'>
        <button onClick={liveHandler} className={liveText ? 'btn-active' : ''}>
          Live Programs
        </button>
        <button
          onClick={programHandler}
          className={programsText ? 'btn-active' : ''}
        >
          Affordable Programs
        </button>
        <button
          onClick={communityHandler}
          className={communityText ? 'btn-active' : ''}
        >
          Community Programs
        </button>
        <button
          onClick={oneNeuronHandler}
          className={oneNeuronText ? 'btn-active' : ''}
        >
          One Neuron
        </button>
        <button
          onClick={seriesHandler}
          className={seriesText ? 'btn-active' : ''}
        >
          Test Series
        </button>
      </div>
      <div className='courses__text'>
        {liveText && (
          <>
            <h2>Live Programs</h2>
            <p>Get your program with live "instructor led" learning.</p>
          </>
        )}
        {programsText && (
          <>
            <h2>Affordable Programs</h2>
            <p>Find your favourite courses in pocket-friendly ways.</p>
          </>
        )}
        {communityText && (
          <>
            <h2>Community Programs</h2>
            <p>Open to all pro-live classes on Youtube for free.</p>
          </>
        )}
        {oneNeuronText && (
          <>
            <h2>One Neuron</h2>
            <p>New Neurons all day, every day.</p>
          </>
        )}
        {seriesText && (
          <>
            <h2>Test Series</h2>
            <p>Quiz-based courses to prepare you for interviews.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LivePrograms;
