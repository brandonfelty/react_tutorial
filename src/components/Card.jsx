import React from 'react';

const Card = ( props ) => {
  let badgeText;
  if (props.openSpots === 0 && !props.fire) {
    badgeText = 'SOLD OUT'
  } else if (props.fire) {
    badgeText = 'THIS IS FIRE'
  } else {
    badgeText = '';
  }

  return (
    <div className='card'>
      <div className='img-container'>
        {props.fire && <i className="fa-solid fa-fire"></i>}
        <div className='badge-text'>{badgeText}</div>
        <img src={props.img} alt='card' className='cover'/>
      </div>
      <p className='rating'>
        {props.rating.stars}
        <i className="fa-solid fa-star rating-star"></i>
        ({props.rating.amount}) - {props.rating.location}
      </p>
      <p>{props.title}</p>
      <div className='rate'>
        <p className='cost'>
          From ${props.cost}&#160;
        </p>
        <p> / person</p>
      </div>
      {
        props.favourite ? 
        <i className="fa-solid fa-star rating-favourite"></i> :
        <i className="fa-regular fa-star rating-favourite"></i>
      }
    </div>
  )
}

export default Card