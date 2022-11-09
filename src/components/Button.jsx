import React from 'react';
import './Button.css';

const Button = ({ type }) => {
  return (
    <button type='button' className={type}>
      {type === 'email' && <i className="fa-solid fa-envelope"></i>} 
      {type === 'linkedin' && <i class="fa-brands fa-linkedin"></i>} 
      {type}
    </button>
  )
}

export default Button