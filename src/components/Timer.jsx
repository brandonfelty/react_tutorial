import React, { useState } from 'react';
import Count from './Count';
import './Timer.css';

const Timer = () => {
  const [ count, setCount ] = useState(0);

  const handleClick = (target) => {
    if (target === 'minus') setCount(prevCount => prevCount - 1);
    if (target === 'plus') setCount(prevCount => prevCount + 1);
  }

  return (
    <div className='timer--container'>
      <div onClick={() => handleClick('minus')} className='timer--counter-container minus'>
        <i className="fa-solid fa-minus timer--counter"></i>
      </div>
      <div className='timer--count'>
        <h1>{count}</h1>
        <Count />
      </div>
      <div onClick={() => handleClick('plus')} className='timer--counter-container plus'>
        <i className="fa-solid fa-plus timer--counter"></i>
      </div>
    </div>
  )
}

export default Timer