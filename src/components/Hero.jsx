import React from 'react';
import './Hero.css';
import collage from '../collage.png';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={collage} alt='hero-collage' />
      <div className='hero-content'>
        <h1>Online Experiences</h1>
        <p>Join one of a kind activies let by one of a kind hosts - all without leaving home.</p>
      </div>
    </div>
  )
}

export default Hero