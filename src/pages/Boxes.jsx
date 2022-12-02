import React from 'react';
import { boxData } from '../dummyData';
import './Boxes.css';
import Box from '../components/Box';

const Boxes = () => {
  const [ boxes ] = React.useState(boxData);

  return (
    <div className='boxes'>
      {
        boxes.map((box) => (
          box.on && 
          <Box
            key={box.id}
            on={box.on} 
          />
        ))
      }
    </div>
  )
}

export default Boxes