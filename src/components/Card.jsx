import React from 'react';
import background from '../palm Small.png';
import './Card.css';

const Card = () => {
  return (
    <div className='card'>
      <img src={background} alt='card' className='cover'/>
      <p className='rating'>
        5
        <i className="fa-solid fa-star rating-star"></i>
         (3) - USA
      </p>
      <p>Our lady palm with Katie Zolang</p>
      <div className='rate'>
        <p className='cost'>
          $136
        </p>
        <p> / person</p>
      </div>
    </div>
  )
}

export default Card