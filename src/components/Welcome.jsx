import React from 'react';
import Header from './Header';
import './Welcome.css';

const Welcome = () => {
  const [ user ] = React.useState('Brandon');

  return (
    <div className='welcome'>
      <Header user={user} />
      <h1>Welcome back,{user}!</h1>
    </div>
  )
}

export default Welcome