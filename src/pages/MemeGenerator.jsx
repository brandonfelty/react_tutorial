import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Meme from '../components/Meme';
import './MemeGenerator.css';

const MemeGenerator = () => {
  const [thingList, setThingList] = useState(['Thing 1', 'Thing 2']);
  const addThing = () => {
    setThingList(prevList => [...prevList, `Thing ${thingList.length + 1}`])
  };
  
  return (
    <div className='meme--page'>
      <NavBar 
        title='Meme Generator'
        subtitle='React Course - Project 3'
        pic='meme-logo'
      />
      <Meme />
      <h3>  List of Things</h3>
      <button onClick={addThing}> Add Thing</button>
      <ol>
        {thingList.map(thing => (
          <li> {thing}</li>
        ))}
      </ol>
    </div>
  )
};

export default MemeGenerator;