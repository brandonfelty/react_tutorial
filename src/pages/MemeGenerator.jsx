import React from 'react';
import NavBar from '../components/NavBar';
import Meme from '../components/Meme';
import './MemeGenerator.css';
import '../components/Cards.css'
import Cards from '../components/Cards';

const MemeGenerator = () => {
  
  return (
    <div className='meme--page'>
      <NavBar 
        title='Meme Generator'
        subtitle='React Course - Project 3'
        pic='meme-logo'
      />
      <Meme />
      <Cards />
    </div>
  )
};

export default MemeGenerator;