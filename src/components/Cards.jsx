import React from 'react';
import Card from './Card';
import './Cards.css';
import { expData } from '../dummyData';

const Cards = () => {
  return (
    <div className='card-container'>
      { expData.map((card, index) => (
        <Card 
          key={index} 
          card={card}
        />
      ))}
    </div>
  )
}

export default Cards;