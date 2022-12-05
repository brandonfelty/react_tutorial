import React from 'react';
import { boxData } from '../dummyData';
import './Boxes.css';
import Box from '../components/Box';

const Boxes = () => {
  const [ boxes ] = React.useState(boxData);

  const toggle = (id) => {
    console.log(id)
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