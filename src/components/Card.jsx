import React from 'react';
import './Card.css';
import { expData } from '../dummyData';

const Card = () => {
  return (
    <div className='card-container'>
      { expData.map((card, index) => (
        <div className='card' key={index}>
          <img src={card.img} alt='card' className='cover'/>
          <p className='rating'>
            {card.rating.stars}
            <i className="fa-solid fa-star rating-star"></i>
            ({card.rating.amount}) - {card.rating.location}
          </p>
          <p>{card.title}</p>
          <div className='rate'>
            <p className='cost'>
              From ${card.cost}&#160;
            </p>
            <p> / person</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card