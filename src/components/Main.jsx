import React from 'react';
import './Main.css';
import reactBackground from '../images/react.png';

const Main = () => {
  return (
    <div className='main-container'>
      <h1 className='main-title'>Fun facts about React</h1>
      <ul className='fact-list'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img className='react-background-logo' src={reactBackground} alt='background'/>
    </div>
  )
}

export default Main;