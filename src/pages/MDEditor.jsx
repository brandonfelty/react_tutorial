import React, { useCallback, useState, useMemo } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import NotesBar from '../components/NotesBar';
import SplitPane, {
  Divider,
  SplitPaneLeft,
  SplitPaneRight,
} from '../components/SplitPane';

import './MDEditor.css';

const dummyNotes = [
  { "id": 0, "body": 'hi'},
  { "id": 1, "body": 'hey'}
]

const MDEditor = () => {
  const [notes, setNotes] = useState(dummyNotes);
  const [activeNote, setActiveNote] = useState(0);

  const onChange = useCallback((value) => {
    setNotes(prevNotes => prevNotes.map(prevNote => {
      return prevNote.id === activeNote
        ? {...prevNote, 'body': value}
        : prevNote;
    }));
  }, [activeNote]);

  function createNewNote () {
    const newNote = {
      "id": notes.length,
      "body": "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [...prevNotes, newNote]);
    setActiveNote(newNote.id);
  };

  const mdeOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      minHeight: '50vh',
      maxHeight: '80vh',
    }
  }, []);

  return (
    <div className='mde--container'>
      <SplitPane className='split-pane-row'>
        <SplitPaneLeft>
          <NotesBar 
            notes={notes} 
            toggleActiveNote={setActiveNote} 
            activeNoteId={activeNote}
            addNote={createNewNote}
          />
        </SplitPaneLeft>
        <Divider className='separator-col' />
        <SplitPaneRight>
          {
            notes.length && 
            <SimpleMDE 
              value={notes[activeNote].body} 
              onChange={onChange} 
              className='mdeditor'
              options={mdeOptions}
            />
          }
        </SplitPaneRight>
      </SplitPane>
    </div>
  )
};

export default MDEditor;