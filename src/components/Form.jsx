import React, { useState } from 'react'

function Form() {
  const [ name, setName ] = useState({firstName: '', lastName: ''});

  const handleChange = (e) => {
    const inputBox = e.target.placeholder;
    const name = e.target.value;
    console.log(inputBox, name)
    switch (inputBox) {
      case 'First Name':
        setName(prevName => ({...prevName, firstName: name}));
        break;
      case 'Last Name':
        setName(prevName => ({...prevName, lastName: name}));
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