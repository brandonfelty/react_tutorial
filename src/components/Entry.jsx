import React from 'react'

const Entry = ({ travelItem }) => {
  const imgNameArray = Object.keys(travelItem.imgURL);
  const imgName = imgNameArray[0];

  return (
    <div className='travel-entry'>
      <img alt='travel' src={travelItem.imgURL[imgName]} />
      <div className='travel-details'>
      <div className='travel-location'>
        <i class="fa-solid fa-location-dot"></i>
        {travelItem.location}
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