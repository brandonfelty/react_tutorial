import React from 'react';
import { boxData } from '../dummyData';
import './Boxes.css';
import Box from '../components/Box';

const Boxes = () => {
  const [ boxes, setBoxes ] = React.useState(boxData);

  const toggle = (id) => {
    const updatedBoxes = boxes.map(box => {
      return box.id === id ? {id, on: !box.on} : box;
    })
    setBoxes(updatedBoxes);
  }

  return (
    <div className='boxes'>
      {
        boxes.map((box) => (
          <Box
            key={box.id}
            on={box.on}
            toggle={() => toggle(box.id)}
          />
        ))
      }
    </div>
  )
}

export default Boxes