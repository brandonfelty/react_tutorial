import React, { useState } from 'react';
import './Meme.css';
import { memeData } from '../dummyData';

const Meme = () => {
  const memes = memeData.data.memes;
  const [ allMemeImages, setAllMemeImages ] = useState([...memes]);
  const [ randomMeme, setRandomMeme ] = useState({
    topText: '',
    bottomText: '',
    url: 'https://i.imgflip.com/30b1gx.jpg',
  });

  const getRandomMeme = () => {
    const numberOfMemes = allMemeImages.length;
    const randomMemeID = Math.floor(Math.random() * numberOfMemes);
    return allMemeImages[randomMemeID];
  };

  const handleClick = (e) => {
    e.preventDefault();
    setRandomMeme(getRandomMeme());
  };

  return (
    <div className='meme'>
      <form>
        <div className='meme-inputs'>
          <input placeholder='top text'></input>
          <input placeholder='bottom text'></input>
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