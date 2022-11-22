import React from 'react'

const Jokes = () => {
  const colors = ['Red', 'Orange', 'Green', 'Yellow', 'Blue', 'Violet', 'Indigo'];
  return (
    <div>
      {colors.map((color) => (
        <h3>{color}</h3>
      ))}
    </div>
  )
}

export default Jokes