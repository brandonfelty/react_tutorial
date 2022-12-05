import React from 'react';

const Box = ({ on, toggle }) => {
  const styles = {
    backgroundColor: on ? '#222222' : 'none'
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