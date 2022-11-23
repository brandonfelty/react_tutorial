import React from 'react';
import './Entry.css';

const Entry = ({ travelItem }) => {
  const imgNameArray = Object.keys(travelItem.imgURL);
  const imgName = imgNameArray[0];

  return (
    <div className='travel-entry'>
      <img alt='travel' src={travelItem.imgURL[imgName]} className='travel-img'/>
      <div className='travel-details'>
        <div className='travel-location'>
          <i className="fa-solid fa-location-dot"></i>
          <span className='travel-area'>{travelItem.location}</span>
          <a href={travelItem.googleMapsLink}>Google Maps Link</a>
        </div>
        <h1>{travelItem.title}</h1>
        <h5>{travelItem.startDate} - {travelItem.endDate}</h5>
        <p>{travelItem.description}</p>
      </div>
    </div>
  )
}

export default Entry