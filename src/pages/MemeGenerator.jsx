import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Meme from '../components/Meme';
import './MemeGenerator.css';

const MemeGenerator = () => {
  const [isGoingOut, setIsGoingOut] = useState(false);
  return (
    <div className='meme--page'>
      <NavBar 
        title='Meme Generator'
        subtitle='React Course - Project 3'
        pic='meme-logo'
      />
      <Meme />
      <h4>    Do you feel like going out?</h4>
      <h1>  { isGoingOut ? 'Yes' : 'No' }</h1>
      <button onClick={() => setIsGoingOut(prev => !prev)}> Do you feel lucky? </button>
    </div>
  )
};

export default MemeGenerator;