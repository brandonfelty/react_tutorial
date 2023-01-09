import React from 'react';

import './NotesBar.css';

const NotesBar = ({ notes, toggleActiveNote, activeNoteId, addNote, editNoteTitle, setEditTitleMode, editTitleMode }) => {

  const changeEditTitleMode = (noteId) => {
    setEditTitleMode(noteId);
  };

  const handleBlur = () => {
    setEditTitleMode(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') setEditTitleMode(null);
  };

  const noteTitleElement = (noteId, noteTitle) => {
    if (editTitleMode === noteId) {
      return (
        <div>
          <input 
            type='text'
            name='title'
            value={noteTitle}
            onChange={editNoteTitle}
            onBlur={handleBlur}
            autoFocus
            onKeyDown={handleKeyDown}
          />
          <button onClick={() => changeEditTitleMode(null)}>OK</button>
          <button onClick={() => changeEditTitleMode(null)}>X</button>
        </div>
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
      onDoubleClick={() => changeEditTitleMode(note.id)}
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