import React from 'react';
import NavBar from '../components/NavBar';
import Meme from '../components/Meme';
import './MemeGenerator.css'

const MemeGenerator = () => {
  const [result, setResult] = React.useState('Yes');
  const handleClick = () => {
    let change;
    if (result === 'Yes') change = 'No';
    if (result === 'No') change = 'Yes';
    setResult(change)
  }
  return (
    <div className='meme--page'>
      <NavBar 
        title='Meme Generator'
        subtitle='React Course - Project 3'
        pic='meme-logo'
      />
      <Meme />
      <div className='state'>
        <h1
          onClick={handleClick}
        >Is state important to know?</h1>
        <div className='state-answer'>
          <h1>{result}</h1>
        </div>
      </div>
    </div>
  )
};

export default MemeGenerator;