import React from 'react';
import '../styles/Page.css';

function Page() {
  return (
    <div className='page-container'>
      <h1 className='page-title'>Reason's I like React</h1>
      <ul className='page-list'>
        <li>Potential to work remote</li>
        <li>Well paid profession</li>
        <li>Career seems more relaxed</li>
        <li>Higher likelyhood for 4-day week</li>
      </ul>
    </div>
  )
}

export default Page;