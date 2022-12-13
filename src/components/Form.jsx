import React, { useState } from 'react'

function Form() {
  const [ formData, setFormData ] = useState(
    { 
      firstName: '', 
      lastName: '',
      email: '',
      comments: '',
      isFriendly: true
    }
  );

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    console.log(checked)
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <form>
      <input
        type="text"
        placeholder='First Name'
        onChange={handleChange}
        name='firstName'
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder='Last Name'
        onChange={handleChange}
        name='lastName'
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder='Email'
        onChange={handleChange}
        name='email'
        value={formData.email}
      />
      <textarea 
        placeholder='Enter comments here'
        onChange={handleChange}
        name='comments'
        value={formData.comments}
      />
      <input 
        type='checkbox'
        id='isFriendly'
        name='isFriendly'
        onChange={handleChange}
        checked={formData.isFriendly}
      />
      <label htmlFor='isFriendly'>Are you friendly?</label>
      <br />
      <fieldset>
        <legend>Current Employment Status</legend>
        <input 
          type='radio'
          id='unemployed'
        />
        <label htmlFor='unemployed'>Unemployed</label>
        <br />
        <input 
          type='radio'
          id='part-time'
        />
        <label htmlFor='part-time'>Part-time</label>
        <br />
        <input 
          type='radio'
          id='full-time'full-time
        />
        <label htmlFor='full-time'>Full-time</label>
        <br />
      </fieldset>
    </form>
  )
}

export default Form