import React, { useState } from 'react'

function Form() {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');

  const handleChange = (e) => {
    const inputBox = e.target.placeholder;
    switch (inputBox) {
      case 'First Name':
        setFirstName(e.target.value);
        break;
      case 'Last Name':
        setLastName(e.target.value);
        break;
      default:
        console.log(inputBox)
    }
  }

  return (
    <form>
      <input
        type="text"
        placeholder='First Name'
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder='Last Name'
        onChange={handleChange}
      />
    </form>
  )
}

export default Form