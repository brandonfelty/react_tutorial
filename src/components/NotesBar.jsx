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
          {`Note ${note.id + 1}`}
        </div>
      ))}
    </div>
  )
};

export default NotesBar;