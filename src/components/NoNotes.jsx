import React from 'react'

const NoNotes = ({ addNote }) => {
  return (
    <div className='no-notes'>
      <div className='add-note'>
        <h2 className='mde--sidebar-title'>Add Your First Note </h2>
        <button className='add-icon-large' onClick={addNote}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  )
};

export default NoNotes