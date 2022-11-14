import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <form>
        <button formAction=''>
          <i className="fa-brands fa-facebook"></i>
        </button>
        <button formAction=''>
          <i className="fa-brands fa-twitter"></i>
        </button>
        <button formAction=''>
          <i className="fa-brands fa-linkedin"></i>
        </button>
        <button formAction=''>
          <i className="fa-brands fa-github"></i>
        </button>
      </form>
    </div>
  )
}

export default Footer