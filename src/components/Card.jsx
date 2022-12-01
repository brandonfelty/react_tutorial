import React from 'react';
import Star from './Star';

const Card = ( props ) => {
  let badgeText;
  if (props.openSpots === 0 && !props.fire) {
    badgeText = 'SOLD OUT'
  } else if (props.fire) {
    badgeText = 'THIS IS FIRE'
  } else {
    badgeText = '';
  }

  const [card, setCard] = React.useState({
    ...props
  });

  const handleClick = () => {
    setCard((prevCard) => (
      {
        ...prevCard,
        favourite: !prevCard.favourite,
      }
    ))
  };

  return (
    <div className='card'>
      <div className='img-container'>
        {card.fire && <i className="fa-solid fa-fire"></i>}
        <div className='badge-text'>{badgeText}</div>
        <img src={card.img} alt='card' className='cover'/>
      </div>
      <p className='rating'>
        {props.rating.stars}
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
      <Star favourite={card.favourite} handleClick={handleClick}/>
    </div>
  )
}

export default Card