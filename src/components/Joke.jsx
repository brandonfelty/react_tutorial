import React from 'react';

const Joke = (props) => {
  return (
    <div>
      <h1>Setup: {props.setup}</h1>
      <h3>PunchLine: {props.punchline}</h3>
    </div>
  )
}

export default Joke