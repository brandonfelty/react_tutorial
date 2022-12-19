import React, { useState } from 'react';
import './Meme.css';
import { memeData } from '../dummyData';

const Meme = () => {
  const memes = memeData.data.memes;
  const [ allMemeImages ] = useState([...memes]);
  const [ randomMeme, setRandomMeme ] = useState({
    topText: '',
    bottomText: '',
    url: 'https://i.imgflip.com/30b1gx.jpg',
  });

  const getRandomMemeURL = () => {
    const numberOfMemes = allMemeImages.length;
    const randomMemeID = Math.floor(Math.random() * numberOfMemes);
    return allMemeImages[randomMemeID].url;
  };

  const handleClick = (e) => {
    const { name, value } = e.target;
    setRandomMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = getRandomMemeURL();
    setRandomMeme((prevMeme) => ({
      ...prevMeme,
      url,
    }));
  }

  return (
    <div className='meme'>
      <form onSubmit={handleSubmit}>
        <div className='meme-inputs'>
          <input 
            placeholder='top text'
            name='topText'
            value={randomMeme.topText}
            onChange={handleClick}>
          </input>
          <input 
            placeholder='bottom text'
            name='bottomText'
            value={randomMeme.bottomText}
            onChange={handleClick}
          >
        </input>
        </div>
        <button>
          <p>Get a new meme</p>
          <i className="fa-solid fa-image"></i>
        </button>
      </form>
      { 
        randomMeme.url && 
        <div className='meme-image--container'>
          <img className='meme-image'
            src={randomMeme.url}
            alt="Random Meme"
          />
          <h2 className='meme--text top'>{randomMeme.topText}</h2>
          <h2 className='meme--text bottom'>{randomMeme.bottomText}</h2>
        </div>
      }
    </div>
  )
}

export default Meme