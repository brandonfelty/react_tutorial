import React, { useCallback, useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const MDEditor = () => {
  const [note, setNote] = useState('Write your markdown here..');
  const onChange = useCallback((value) => {
    setNote(value);
  }, []);

  return (
    <div>
      <SimpleMDE value={note} onChange={onChange} />
    </div>
  )
};

export default MDEditor;