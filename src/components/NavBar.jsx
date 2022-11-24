import React from 'react';
import reactLogo from '../images/react.png';
import airbnbLogo from '../images/airbnb.png';
import MemeLogo from './MemeLogo';
import './NavBar.css';

const NavBar = ({ title, subtitle, pic }) => {
  let logo = '';
  if (pic === 'react') logo = reactLogo;
  if (pic === 'airbnb') logo = airbnbLogo;
  let logoComponent;
  if (pic === 'umbrella') logoComponent = <i className="fa-solid fa-umbrella"></i>;
  if (pic === 'meme-logo') logoComponent = <MemeLogo />;

  return (
    <nav className={pic === 'umbrella' ? 'nav-travel': 'nav-container' }>
      {!logoComponent ? <img 
        alt='react-logo' 
        src={logo} 
        className='img-logo'
      /> :
      logoComponent}
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <a href='/info'> Business Card</a>
    </nav>
  )
}

export default NavBar