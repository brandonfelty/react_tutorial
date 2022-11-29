import React, { useEffect, useState } from 'react';
import './Meme.css';
import { memeData } from '../dummyData';

const Meme = () => {
  const memes = memeData.data.memes;
  const [ randomMeme, setRandomMeme ] = useState({});

  const getRandomMeme = () => {
    const numberOfMemes = memes.length;
    const randomMemeID = Math.floor(Math.random() * numberOfMemes);
    return memes[randomMemeID];
  };

  const handleClick = (e) => {
    e.preventDefault();
    setRandomMeme(getRandomMeme());
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
        <p>Get a new meme</p>
          <i className="fa-solid fa-image"></i>
        </button>
      </form>
      { 
        randomMeme.url && 
        <img className='meme-image'
          src={randomMeme.url}
          alt="Random Meme"
        />
      }
    </div>
  )
}

export default Meme