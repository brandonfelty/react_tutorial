import React from 'react';
import reactLogo from '../images/react.png';
import airbnbLogo from '../images/airbnb.png';
import MemeLogo from './MemeLogo';
import './NavBar.css';
import { FormControlLabel, Switch } from '@mui/material';
import { alpha, styled } from '@mui/material/styles'
import { blue } from '@mui/material/colors';

const BlueSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: blue[300],
    '&:hover': {
      backgroundColor: alpha(blue[300], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: blue[300],
  },
}));


const NavBar = ({ title, subtitle, pic, darkMode, setDarkMode }) => {
  let logo = '';
  let navClass = '';

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

  const handleChange = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  };

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
          <BlueSwitch 
            defaultChecked
            checked={darkMode}
            onChange={handleChange}
            className={`navbar-switch ${darkMode ? 'dark' : ''}`}
          />
        } label='Dark Mode'
          className={`navbar-mode ${darkMode ? 'dark' : ''}`}
        />
      </div>
    </nav>
  )
}

export default NavBar