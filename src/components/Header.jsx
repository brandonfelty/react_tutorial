import React from 'react';


const Header = () => {
  const [user, setUser] = React.useState('Brandon');

  return (
    <header className='header'>
      <p>Current User: {user}</p>
    </header>
  )
}

export default Header