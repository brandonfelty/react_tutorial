import React from 'react';


const Header = () => {
  const [user, setUser] = React.useState('Brandon');

  return (
    <div className='header'>
      <p>Current User: {user}</p>
    </div>
  )
}

export default Header