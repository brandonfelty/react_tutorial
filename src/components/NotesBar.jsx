import React from 'react';

import './NotesBar.css';

const NotesBar = ({ notes }) => {
  return (
    <div className='mde--sidebar'>
      <h2>Notes </h2>
      <button>
        <i className="fa-solid fa-plus"></i>
      </button>
      { notes.map((note, index) => (
        <div className='mde--sidebar-note' key={index}>
          {note}
        </div>
      ))}
    </div>
  )
};

export default NotesBar;