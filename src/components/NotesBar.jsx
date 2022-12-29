import React from 'react';

import './NotesBar.css';

const NotesBar = ({ notes, toggleActiveNote, activeNoteId, addNote }) => {
  return (
    <div className='mde--sidebar'>
      <div className='add-note'>
        <h2 className='mde--sidebar-title'>Notes </h2>
        <button className='add-icon' onClick={addNote}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      { notes.map((note, index) => (
        <div 
          className=
          {
            `mde--sidebar-note ${activeNoteId === note.id ? 'active' : ''}`
          }
          key={note.id}
          onClick={() => toggleActiveNote(note.id)}
        >
          {`Note ${note.id + 1}`}
        </div>
      ))}
    </div>
  )
};

export default NotesBar;