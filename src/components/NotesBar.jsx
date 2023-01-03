import React from 'react';

import './NotesBar.css';

const NotesBar = ({ notes, toggleActiveNote, activeNoteId, addNote }) => {
  console.log(notes)
  return (
    <div className={`mde--sidebar ${notes.length === 0 && 'no-notes'}`}>
      <div className='add-note'>
        <h2 className='mde--sidebar-title'>{notes.length === 0 ? 'Add Your First Note' : 'Notes '}</h2>
        <button className={`add-icon ${notes.length === 0 && 'large'}`} onClick={addNote}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      { notes.length !== 0 ? notes.map((note, index) => (
        <div 
          className=
          {
            `mde--sidebar-note 
            ${activeNoteId === note.id ? 'active' : ''}
            ${notes.length === 0 ? 'notes-empty' : ''}
            `
          }
          key={note.id}
          onClick={() => toggleActiveNote(note.id)}
        >
          {`Note ${note.id + 1}`}
        </div>
      )) : <></>}
    </div>
  )
};

export default NotesBar;