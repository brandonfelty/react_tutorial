import React from 'react';
import Button from './Button';
import headshot from '../images/p_b.png'
import './Summary.css';

const Summary = () => {
  return (
    <div className='summary'>
      <img className='headshot' alt='headshot' src={headshot} />
      <h3>Brandon Felty</h3>
      <h4>Frontend Developer</h4>
      <p>Calgary, AB</p>
      <div className='summary-contact'>
        <Button type='email' />
        <Button type='linkedin' />
      </div>
    </div>
  )
}

export default Summary