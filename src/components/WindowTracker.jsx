import React, { useState, useEffect } from 'react';

const WindowTracker = () => {
  const [show, setShow] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const handleClick = () => {
    setShow(prev => !prev);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    })
  }, []);

  return (
    <div className='windowtracker--container'>
      <button onClick={handleClick}>
        Toggle WindowTracker
      </button>
      {show && <h1>Window width: {windowWidth}</h1>}
    </div>
  )
}

export default WindowTracker;