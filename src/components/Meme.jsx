import React from 'react';
import './Meme.css';

const Meme = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('I was clicked..')
  }
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
    </div>
  )
}

export default Meme