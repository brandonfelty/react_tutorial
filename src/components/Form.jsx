import React, { useState } from 'react'

function Form() {
  const [ formData, setFormData ] = useState(
    { 
      firstName: '', 
      lastName: '',
      email: '',
      comments: ''
    }
  );

  const handleChange = (e) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value
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
    </form>
  )
}

export default Form