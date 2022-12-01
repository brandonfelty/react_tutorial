import React from 'react'

const Star = ({ favourite, handleClick }) => {
  return (
    <div>
    {
      favourite ? 
      <i className="fa-solid fa-star rating-favourite" onClick={handleClick}></i> :
      <i className="fa-regular fa-star rating-favourite" onClick={handleClick}></i>
    }
    </div>
  )
}

export default Star