import './Dashboard.css';
import React from 'react';
import courseIcon from '../../assets/pure-hardwork/books-icon.svg';
import stutentIcon from '../../assets/pure-hardwork/student-icon.svg';
import transitionIcon from '../../assets/pure-hardwork/credit-card-icon.svg';

const Dashboard = () => {
  return (
    <div className='dashboard__container'>
      <div className='dashboard__heading'>
        <h2>“Pure Hardwork, No Shortcuts!”</h2>
      </div>
      <div className='dashboard__info'>
        <div className='info-items'>
          <img src={courseIcon} alt='' />
          <h4>400+</h4>
          <p>Different Courses</p>
        </div>
        <div className='info-items'>
          <img src={stutentIcon} alt='' />
          <h4>400000+</h4>
          <p>Students Enrolled</p>
        </div>
        <div className='info-items'>
          <img src={transitionIcon} alt='' />
          <h4>10000+</h4>
          <p>Successful Transition</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
