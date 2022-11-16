import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Card from '../components/Card';

import './AirBNB.css';

const AirBNB = () => {
  return (
    <div className='airbnb'>
      <NavBar pic='airbnb' title='' subtitle="" />
      <Hero />
      <Card />
    </div>
  )
}

export default AirBNB;