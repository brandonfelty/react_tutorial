import React, { useState, useEffect } from 'react';
import './Meme.css';

const Meme = () => {
  const [ allMemes, setAllMemes ] = useState([]);

  const [ randomMeme, setRandomMeme ] = useState({
    topText: '',
    bottomText: '',
    url: '',
  });

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => data.success && setAllMemes(data.data.memes))
  }, []);

  const getRandomMemeURL = () => {
    const numberOfMemes = allMemes.length;
    const randomMemeID = Math.floor(Math.random() * numberOfMemes);
    return allMemes[randomMemeID].url;
  };

  const handleChange = (e) => {
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
            onChange={handleChange}>
          </input>
          <input 
            placeholder='bottom text'
            name='bottomText'
            value={randomMeme.bottomText}
            onChange={handleChange}
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