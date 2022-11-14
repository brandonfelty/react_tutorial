import React from 'react';
import reactLogo from '../react.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='nav-container'>
      <img alt='react-logo' src={reactLogo} className='img-logo'/>
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
      <a href='/info'> Business Card</a>
    </nav>
  )
}

export default NavBar