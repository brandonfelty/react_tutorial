import React, { useState } from 'react'

function Form() {
  const [ formData, setFormData ] = useState(
    { 
      firstName: '', 
      lastName: '',
      email: ''
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
      />
      <input
        type="text"
        placeholder='Last Name'
        onChange={handleChange}
        name='lastName'
      />
      <input
        type="email"
        placeholder='Email'
        onChange={handleChange}
        name='email'
      />
    </form>
  )
}

export default Form