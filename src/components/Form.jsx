import React, { useState } from 'react'

function Form() {
  const [ firstName, setFirstName ] = useState('');

  const handleChange = (e) => {
    setFirstName(e.target.value)
  }
  
  return (
    <form>
      <input
        type="text"
        placeholder='First Name'
        onChange={handleChange}
      />
    </form>
  )
}

export default Form