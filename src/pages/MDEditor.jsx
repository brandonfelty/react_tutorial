import React, { useCallback, useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import NotesBar from '../components/NotesBar';

import './MDEditor.css';

const MDEditor = () => {
  const [notes, setNotes] = useState([]);
  const onChange = useCallback((value) => {
    setNotes(value);
  }, []);

  return (
    <div className='mde--container'>
      <NotesBar notes={notes} />
      <SimpleMDE value={notes[0]} onChange={onChange} className='mdeditor'/>
    </div>
  )
};

export default MDEditor;