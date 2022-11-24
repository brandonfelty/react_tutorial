import React from 'react';
import NavBar from '../components/NavBar';

const MemeGenerator = () => {
  return (
    <div className='meme--page'>
      <NavBar 
        title='Meme Generator'
        subtitle='React Course - Project 3'
        pic='meme-logo'
      />
    </div>
  )
};

export default MemeGenerator;