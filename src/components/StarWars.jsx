import React, { useEffect, useState } from 'react'

const StarWars = () => {
  const [starWarsData, setStarWarsData] = useState({});
  const [character, setCharacter] = useState(1);

  useEffect(() => {
    console.log('effect ran')
    fetch('https://swapi.dev/api/people/1')
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, []);

  return (
    <div className='starwars'>
      <h2>Character Number: {character}</h2>
      <button>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default StarWars