import React from 'react';
import '../styles/Nav.css'
import logo from '../react.png';

function Nav() {
  return (
    <div className='nav-container'>
      <img src={logo} alt='react' width='40px'/>
      <ul className='nav-items'>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Nav;