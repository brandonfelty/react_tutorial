import React from 'react';
import reactLogo from '../images/react.png';
import airbnbLogo from '../images/airbnb.png';
import MemeLogo from './MemeLogo';
import './NavBar.css';
import { FormControlLabel, Switch } from '@mui/material';

const NavBar = ({ title, subtitle, pic }) => {
  let logo = '';
  let navClass = '';

  // hold for darkmode state later
  let darkMode = true;

  if (pic === 'react') {
    logo = reactLogo;
    navClass = `nav-home ${darkMode ? 'dark' : ''}`;
  }
  if (pic === 'airbnb') {
    logo = airbnbLogo;
    navClass = 'nav-container';
  }
  let logoComponent;
  if (pic === 'umbrella') {
    navClass = 'nav-travel';
    logoComponent = <i className="fa-solid fa-umbrella"></i>;
  }  
  if (pic === 'meme-logo') {
    navClass = 'nav-meme';
    logoComponent = <MemeLogo />;
  }

  return (
    <nav className={navClass}>
      {
        !logoComponent ? 
        <img 
          alt='react-logo' 
          src={logo} 
          className='img-logo'
        /> :
        <div className='meme-logo'>
          {logoComponent}
        </div>
      }
      <h3 className={`navbar-title ${darkMode ? 'dark' : ''}`}>{title}</h3>
      <div className={`navbar-right ${darkMode ? 'dark' : ''}`}>
        <h4 className={`navbar-subtitle ${darkMode ? 'dark' : ''}`}>{subtitle}</h4>
        <a href='/info' className='business-card'> Business Card</a> 
        <FormControlLabel control=
        {
          <Switch 

          />
        } label='Dark Mode'
          className={`navbar-mode ${darkMode ? 'dark' : ''}`}
        />
      </div>
    </nav>
  )
}

export default NavBar