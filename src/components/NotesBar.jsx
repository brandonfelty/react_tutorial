import React from 'react';

import './NotesBar.css';

const NotesBar = ({ notes }) => {
  return (
    <div className='mde--sidebar'>
      <div className='add-note'>
        <h2 className='mde--sidebar-title'>Notes </h2>
        <button className='add-icon'>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      { notes.map((note, index) => (
        <div className='mde--sidebar-note' key={index}>
          {`Note ${note.id + 1}`}
        </div>
      ))}
    </div>
  )
};

export default NotesBar;