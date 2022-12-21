import React, { useState } from 'react';

const WindowTracker = () => {
  const [show, setShow] = useState(true);
  
  const handleClick = () => {
    setShow(prev => !prev);
  };

  return (
    <div className='windowtracker--container'>
      <button onClick={handleClick}>
        Toggle WindowTracker
      </button>
      { show && <h1>Window width: {window.innerWidth}</h1>}
    </div>
  )
}

export default WindowTracker;