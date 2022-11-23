import React from 'react';

const Card = ({ card }) => {

  return (
    <div className='card'>
      <div className='img-container'>
        {card.fire && <i className="fa-solid fa-fire"></i>}
        <img src={card.img} alt='card' className='cover'/>
      </div>
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
  )
}

export default Card