import React, {useState} from 'react';
import { boxData } from '../dummyData';
import './Boxes.css';
import Box from '../components/Box';

const Boxes = () => {
  const [ boxes, setBoxes ] = React.useState(boxData);
  const [ messages, setMessages ] = useState([])

  const toggle = (id) => {
    const updatedBoxes = boxes.map(box => {
      return box.id === id ? {id, on: !box.on} : box;
    })
    setBoxes(updatedBoxes);
  }

  return (
    <div className='boxes'>
      {messages.length > 1 && <h1>You have {messages.length} unread messages</h1>}
      {messages.length === 1 && <h1>You have one unread message</h1>}
      {messages.length === 0 && <h1>You have no messages</h1>}

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