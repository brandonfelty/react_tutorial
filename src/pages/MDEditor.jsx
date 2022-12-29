import React, { useCallback, useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import NotesBar from '../components/NotesBar';

import './MDEditor.css';

const dummyNotes = [
  { "id": 0, "body": 'hi'},
  { "id": 1, "body": 'hit'},
  { "id": 2, "body": 'hithe'},
  { "id": 3, "body": 'hithere'}
]

const MDEditor = () => {
  const [notes, setNotes] = useState(dummyNotes);
  const [activeNote, setActiveNote] = useState(0);

  const onChange = useCallback((value) => {
    setNotes(value);
  }, []);

  const createNewNote = () => {
    const newNote = {
      id: notes.length,
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [...prevNotes, newNote]);
    setActiveNote(newNote.id);
  };

  return (
    <div className='mde--container'>
      <NotesBar 
        notes={notes} 
        toggleActiveNote={setActiveNote} 
        activeNoteId={activeNote}
        addNote={createNewNote}
      />
      <SimpleMDE value={notes[activeNote].body} onChange={onChange} className='mdeditor'/>
    </div>
  )
};

export default MDEditor;