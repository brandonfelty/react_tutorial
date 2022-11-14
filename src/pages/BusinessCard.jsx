import React from 'react';
import Summary from '../components/Summary';
import About from '../components/About';
import Interests from '../components/Interests';
import Footer from '../components/Footer';
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