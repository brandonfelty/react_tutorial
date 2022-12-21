import React, {useState} from 'react';
import { boxData } from '../dummyData';
import './Boxes.css';
import Box from '../components/Box';
import Form from '../components/Form';

const Boxes = () => {
  const [ boxes, setBoxes ] = React.useState(boxData);
  const [ messages ] = useState(['a', 'b'])

  const toggle = (id) => {
    const updatedBoxes = boxes.map(box => {
      return box.id === id ? {id, on: !box.on} : box;
    })
    setBoxes(updatedBoxes);
  }

  return (
    <div className='boxes'>
      
      {
        messages.length === 0 ? 
        <h1>You're all caught up</h1> :
        <h1>You have {messages.length} unread  
        {
          messages.length === 1 ? ' message' : ' messages'
        }
        </h1>
      }

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