import React from 'react';
import { boxData } from '../dummyData';
import './Boxes.css';

const Boxes = () => {
  const [boxes, setBoxes] = React.useState(boxData);
  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <div className='boxes'>
      {
        boxes.map((box) => (
          box.on && 
          <div 
            key={box.id} 
            className='box'
            onClick={handleClick}
          >
          </div>
        ))
      }
    </div>
  )
}

export default Boxes