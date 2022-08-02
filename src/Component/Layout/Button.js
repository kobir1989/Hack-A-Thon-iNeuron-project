import React from 'react';
import './Button.css';
const Button = (props) => {
  return (
    <div>
      <button className='btn'>{props.children}</button>
    </div>
  );
};

export default Button;
