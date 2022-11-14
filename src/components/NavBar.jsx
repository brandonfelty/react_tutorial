import React from 'react';
import reactLogo from '../react.png';
import airbnbLogo from '../airbnb.png';
import './NavBar.css';

const NavBar = ({ title, subtitle }) => {
  let logo = '';
  if (title === 'React') logo = reactLogo;
  if (title === 'AirBnB') logo = airbnbLogo;

  return (
    <nav className='nav-container'>
      <img 
        alt='react-logo' 
        src={logo} 
        className='img-logo'
      />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <a href='/info'> Business Card</a>
    </nav>
  )
}

export default NavBar