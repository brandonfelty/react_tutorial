import React from 'react';
import Joke from '../components/Joke';
import './Jokes.css';
import { jokeData } from '../dummyData';


const Jokes = () => {
  
  return (
    <div className='jokes--container'>
      {jokeData.map(joke => (
        <Joke 
          setup={joke.setup}
          punchline={joke.punchline}
        />
      ))}
    </div>
  )
}

export default Jokes