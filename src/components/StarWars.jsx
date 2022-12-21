import React, { useEffect, useState } from 'react'

const StarWars = () => {
  const [starWarsData, setStarWarsData] = useState({});
  const [character, setCharacter] = useState(1);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/' + character)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [character]);

  const handleClick = () => {
    starWarsData['detail'] === 'Not found' ? 
      setCharacter(1) :
      setCharacter(prevCharacter => prevCharacter + 1)
  }

  return (
    <div className='starwars'>
      <h2>Character Number: {character}</h2>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <button onClick={handleClick}>Get Next Character</button>
    </div>
  )
}

export default StarWars