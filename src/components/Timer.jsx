import React, { useState, useEffect } from 'react';
import Count from './Count';
import './Timer.css';

const Timer = () => {
  const [ count, setCount ] = useState(0);

  console.log('Component Rendered')

  const handleClick = (target) => {
    if (target === 'minus') setCount(prevCount => prevCount - 1);
    if (target === 'plus') setCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    console.log("Effect function ran")
  }, [count])

  return (
    <div className='timer--container'>
      <div onClick={() => handleClick('minus')} className='timer--counter-container minus'>
        <i className="fa-solid fa-minus timer--counter"></i>
      </div>
      <Count count={count} />
      <div onClick={() => handleClick('plus')} className='timer--counter-container plus'>
        <i className="fa-solid fa-plus timer--counter"></i>
      </div>
    </div>
  )
}

export default Timer