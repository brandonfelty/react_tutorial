import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='login--container'>
      <div className='login--form'>
        <form id='login-form'>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
          <input type='password' placeholder='Confirm password'/>
          <div>
            <input type='checkbox' id='joinNewsletter'/>
            <label htmlFor='joinNewsletter'>I want to join the newsletter</label>
          </div>
          <button className='login--button'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Login