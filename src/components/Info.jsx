import React from 'react';
import Summary from './Summary';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';



const Info = () => {
  return (
    <div className='business-card'>
      <Summary />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default Info