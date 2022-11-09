import React from 'react';
import Summary from './Summary';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';
import './BusinessCard.css';


const BusinessCard = () => {
  return (
    <div className='business-card-container'>
      <Summary />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default BusinessCard;