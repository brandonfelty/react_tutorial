import React from 'react';
import reactLogo from '../images/react.png';
import airbnbLogo from '../images/airbnb.png';
import './NavBar.css';

const NavBar = ({ title, subtitle, pic }) => {
  let logo = '';
  if (pic === 'react') logo = reactLogo;
  if (pic === 'airbnb') logo = airbnbLogo;
  let umbrella;
  if (pic === 'umbrella') umbrella = <i class="fa-solid fa-umbrella"></i>;


  return (
    <nav className={pic === 'umbrella' ? 'nav-travel': 'nav-container' }>
      {!umbrella ? <img 
        alt='react-logo' 
        src={logo} 
        className='img-logo'
      /> :
      umbrella}
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <a href='/info'> Business Card</a>
    </nav>
  )
}

export default NavBar