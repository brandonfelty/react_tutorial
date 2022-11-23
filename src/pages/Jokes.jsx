import React from 'react';
import Joke from '../components/Joke';
import { jokeData } from '../dummyData';

const Jokes = () => {
  
  return (
    <div>
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