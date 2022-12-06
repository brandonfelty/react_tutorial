import React from 'react';

const Box = ({ on, toggle, id }) => {
  const styles = {
    backgroundColor: on ? '#222222' : '#fff'
  }
  return (
    <div
      className='box'
      style={styles}
      onClick={toggle}
    >
    </div>
  )
}

export default Box