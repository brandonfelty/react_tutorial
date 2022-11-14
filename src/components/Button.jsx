import React from 'react';
import './Button.css';

const Button = ({ type }) => {
  return (
    <form>
      <button 
        formAction={type === 'linkedin' ? 'https://www.linkedin.com/in/brcfelty/' : null}
        className={type}
      >
        {type === 'email' && <i className="fa-solid fa-envelope"></i>} 
        {type === 'linkedin' && <i className="fa-brands fa-linkedin"></i>} 
        {type}
      </button>
  </form>
  )
}

export default Button