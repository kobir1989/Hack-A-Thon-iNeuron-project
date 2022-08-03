import './TechAvengers.css';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../HallOfFame/HallOfFame.css';
import Amresh from '../../assets/tech-avengers/1.png';
import hitesh from '../../assets/tech-avengers/2.png';
import Kiran from '../../assets/tech-avengers/3.png';
import Krish from '../../assets/tech-avengers/4.png';
import Mukesh from '../../assets/tech-avengers/5.png';
import Saurabh from '../../assets/tech-avengers/6.png';
import Saksham from '../../assets/tech-avengers/7.png';
import Souranghsu from '../../assets/tech-avengers/8.png';
import Sudhanshu from '../../assets/tech-avengers/9.png';
import Sunny from '../../assets/tech-avengers/10.png';
import Navin from '../../assets/tech-avengers/11.png';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
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
              <img src={Amresh} alt='' />
              <h3>Amresh Bharti</h3>
              <p>VP Marketing</p>

              <div className='card-icon'>
                <AiFillLinkedin className='social__icons linked-in' />
                <AiFillYoutube className='social__icons youtube' />
                <AiOutlineTwitter className='social__icons twitter' />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={hitesh} alt='' />
              <h3>hitesh Choudhary</h3>
              <p>CTO</p>

              <div className='card-icon'>
                <AiFillLinkedin className='social__icons linked-in' />
                <AiFillYoutube className='social__icons youtube' />
                <AiOutlineTwitter className='social__icons twitter' />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={Kiran} alt='' />
              <h3>Kiran Sahu</h3>
              <p>Mentor</p>

              <div className='card-icon'>
                <AiFillLinkedin className='social__icons linked-in' />
                <AiFillYoutube className='social__icons youtube' />
                <AiOutlineTwitter className='social__icons twitter' />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={Krish} alt='' />
              <h3>Krish Naik</h3>
              <p>CIO</p>

              <div className='card-icon'>
                <AiFillLinkedin className='social__icons linked-in' />
                <AiFillYoutube className='social__icons youtube' />
                <AiOutlineTwitter className='social__icons twitter' />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={Mukesh} alt='' />
              <h3>Mukesh Otwani</h3>
              <p>VP Automation</p>

              <div className='card-icon'>
                <AiFillLinkedin className='social__icons linked-in' />
                <AiFillYoutube className='social__icons youtube' />
                <AiOutlineTwitter className='social__icons twitter' />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={Saurabh} alt='' />
              <h3>Saurabh Shukla </h3>
              <p>Senior VP</p>

              <div className='card-icon'>
                <AiFillLinkedin className='social__icons linked-in' />
                <AiFillYoutube className='social__icons youtube' />
                <AiOutlineTwitter className='social__icons twitter' />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={Saksham} alt='' />
              <h3>Saksham Choudhary</h3>
              <p>Cyber Security Lead</p>

              <div className='card-icon'>
                <AiFillLinkedin className='social__icons linked-in' />
                <AiFillYoutube className='social__icons youtube' />
                <AiOutlineTwitter className='social__icons twitter' />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={Souranghsu} alt='' />
              <h3>Souranghsu Pal</h3>
              <p>Mentor</p>

              <div className='card-icon'>
                <AiFillLinkedin className='social__icons linked-in' />
                <AiFillYoutube className='social__icons youtube' />
                <AiOutlineTwitter className='social__icons twitter' />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={Sunny} alt='' />
              <h3>Sunny Bhaveen Chandra</h3>
              <p>Data Scientist</p>

              <div className='card-icon'>
                <AiFillLinkedin className='social__icons linked-in' />
                <AiFillYoutube className='social__icons youtube' />
                <AiOutlineTwitter className='social__icons twitter' />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={Navin} alt='' />
              <h3>Navin Reddy</h3>
              <p>Senior VP</p>

              <div className='card-icon'>
                <AiFillLinkedin className='social__icons linked-in' />
                <AiFillYoutube className='social__icons youtube' />
                <AiOutlineTwitter className='social__icons twitter' />
              </div>
            </div>
          </div>
          <div>
            <div className='Avengers__card'>
              <img src={Sudhanshu} alt='' />
              <h3>Sudhanshu Kumar</h3>
              <p>AI Engineer & CEO</p>

              <div className='card-icon'>
                <AiFillLinkedin className='social__icons linked-in' />
                <AiFillYoutube className='social__icons youtube' />
                <AiOutlineTwitter className='social__icons twitter' />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TechAvengers;
