import React from 'react'

const Login = () => {
  return (
    <div className='login--container'>
      <div className='login--form'>
        <form>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
          <input type='password' placeholder='Confirm password'/>
          <label htmlFor='joinNewsletter'>I want to join the newsletter</label>
          <input type='checkbox' id='joinNewsletter'/>
        </form>
      </div>
    </div>
  )
}

export default Login