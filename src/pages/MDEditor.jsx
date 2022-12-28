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
  const onChange = useCallback((value) => {
    setNotes(value);
  }, []);

  return (
    <div className='mde--container'>
      <NotesBar notes={notes} />
      <SimpleMDE value={notes[0].body} onChange={onChange} className='mdeditor'/>
    </div>
  )
};

export default MDEditor;