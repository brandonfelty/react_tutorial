import React from 'react';
import { boxData } from '../dummyData';
import './Boxes.css';
import Box from '../components/Box';

const Boxes = () => {
  const [ boxes, setBoxes ] = React.useState(boxData);

  const toggle = (id) => {
    const updatedBoxes = boxes.map(box => {
      if (box.id === id) return {id, on: !box.on};
      return box;
    })
    setBoxes(updatedBoxes);
  }

  return (
    <div className='boxes'>
      {
        boxes.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            on={box.on}
            toggle={toggle}
          />
        ))
      }
    </div>
  )
}

export default Boxes