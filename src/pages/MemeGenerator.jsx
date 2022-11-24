import React from 'react';
import NavBar from '../components/NavBar';
import Meme from '../components/Meme';

const MemeGenerator = () => {
  return (
    <div className='meme--page'>
      <NavBar 
        title='Meme Generator'
        subtitle='React Course - Project 3'
        pic='meme-logo'
      />
      <Meme />
    </div>
  )
};

export default MemeGenerator;