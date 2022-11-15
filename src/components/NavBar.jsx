import React from 'react';
import reactLogo from '../react.png';
import airbnbLogo from '../airbnb.png';
import './NavBar.css';

const NavBar = ({ title, subtitle, pic }) => {
  let logo = '';
  if (pic === 'react') logo = reactLogo;
  if (pic === 'airbnb') logo = airbnbLogo;

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