import React from 'react';

const Joke = (props) => {
  const [ isShown, setIsShown ] = React.useState(false);

  const toggleShown = (e) => {
    e.preventDefault();
    setIsShown(prev => !prev);
  };

  return (
    <div className='joke'>
      <h1>Setup: {props.setup}</h1>
      <button onClick={toggleShown}>
        {isShown ? 'Hide' : 'Show'} PunchLine
      </button>
      { isShown && <h3>PunchLine: {props.punchline}</h3> }
    </div>
  )
}

export default Joke