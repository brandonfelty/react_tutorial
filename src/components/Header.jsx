import React from 'react';


const Header = ({user}) => {
  return (
    <header className='header'>
      <p>Current User: {user}</p>
    </header>
  )
}

export default Header