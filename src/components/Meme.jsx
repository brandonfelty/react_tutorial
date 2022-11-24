import React from 'react';
import './Meme.css';

const Meme = () => {
  return (
    <div className='meme'>
      <form>
        <div className='meme-inputs'>
          <input placeholder='shut up'></input>
          <input placeholder='and take my money'></input>
        </div>
        <button type='submit'>
          <p>Get a new meme image</p>
          <i className="fa-solid fa-image"></i>
        </button>
      </form>
    </div>
  )
}

export default Meme