import React from 'react';

const Box = ({ on }) => {
  const styles = {
    backgroundColor: on ? '#222222' : 'none'
  }
  return (
    <div
      className='box'
      style={styles}
    >
    </div>
  )
}

export default Box