import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Cards from '../components/Cards';

import './AirBNB.css';

const AirBNB = () => {
  return (
    <div className='airbnb'>
      <NavBar pic='airbnb' title='' subtitle="" />
      <Hero />
      <div className='cards'>
        <Cards />
      </div>
    </div>
  )
}

export default AirBNB;