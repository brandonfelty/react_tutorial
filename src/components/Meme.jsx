import React, { useState } from 'react';
import './Meme.css';
import { memeData } from '../dummyData';

const Meme = () => {
  const getRandomMeme = () => {
    const numberOfMemes = memeData.length;
    const randomMemeID = Math.floor(Math.random() * numberOfMemes);
    return memeData[randomMemeID];
  };
  const [ randomMeme, setRandomMeme ] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    setRandomMeme(getRandomMeme());
    console.log(randomMeme)
  };

  return (
    <div className='meme'>
      <form>
        <div className='meme-inputs'>
          <input placeholder='shut up'></input>
          <input placeholder='and take my money'></input>
        </div>
        <button 
          type='submit'
          onClick={handleClick}
        >
          <p>Get a new meme image</p>
          <i className="fa-solid fa-image"></i>
        </button>
      </form>
      <img className='meme-image'
        src={randomMeme.image}
        alt="Random Meme"
      />
      {memeData.map(meme => (
        <p>{meme.name}</p>
      ))}
    </div>
  )
}

export default Meme