import React from 'react';
import './Card.css';
import { expData } from '../dummyData';

const Card = () => {
  const card = expData[0];

  return (
    <div className='card'>
      <img src={card.img} alt='card' className='cover'/>
      <p className='rating'>
        {card.rating.stars}
        <i className="fa-solid fa-star rating-star"></i>
         ({card.rating.amount}) - {card.rating.location}
      </p>
      <p>Our lady palm with Katie Zolang</p>
      <div className='rate'>
        <p className='cost'>
          From ${card.cost}&#160;
        </p>
        <p> / person</p>
      </div>
    </div>
  )
}

export default Card