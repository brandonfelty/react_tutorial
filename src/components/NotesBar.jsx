import React from 'react';

import './NotesBar.css';

const NotesBar = ({ notes, toggleActiveNote, activeNoteId, addNote, editNoteTitle, setEditTitleMode, editTitleMode }) => {
  const changeEditTitleMode = () => {
    console.log('should go to edit mode now')
  };

  const noteTitleElement = (noteId, noteTitle) => {
    if (editTitleMode && noteId === activeNoteId) {
      return (
        <div>Edit Mode</div>
      )
    } else {
      return (
        <div>{noteTitle}</div>
      )
    }
  }

  const notesElement = notes.map((note) => (
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
      onDoubleClick={changeEditTitleMode}
    >
    {
      noteTitleElement(note.id, note.title)
    }
    </div>
  ));

  return (
    <div className='mde--sidebar'>
      <div className='add-note'>
        <h2 className='mde--sidebar-title'>Notes </h2>
        <button className='add-icon' onClick={addNote}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      {notesElement}
    </div>
  )
};

export default NotesBar;