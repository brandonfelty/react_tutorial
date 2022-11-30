import React from 'react';
import './Timer.css';

const Timer = () => {
  return (
    <div className='timer--container'>
      <div className='timer--counter-container minus'>
        <i className="fa-solid fa-minus timer--counter"></i>
      </div>
      <div className='timer--count'>
        <h1>0</h1>
      </div>
      <div className='timer--counter-container plus'>
        <i className="fa-solid fa-plus timer--counter"></i>
      </div>
    </div>
  )
}

export default Timer