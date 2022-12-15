import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    newsletter: false,
  });

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }))
  };

  return (
    <div className='login--container'>
      <div className='login--form'>
        <form id='login-form'>
          <input 
            type='email'
            placeholder='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input 
            type='password' 
            placeholder='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          <input 
            type='password' 
            placeholder='Confirm password'
            name='passwordConfirm'
            value={formData.passwordConfirm}
            onChange={handleChange}
          />
          <div className='login-newsletter'>
            <input 
              type='checkbox' 
              id='joinNewsletter'
              name='newsletter'
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <label htmlFor='joinNewsletter'>I want to join the newsletter</label>
          </div>
          <button className='login--button'>Sign Up</button>
        </form>
      </div>
    </div>
  )
};

export default Login;