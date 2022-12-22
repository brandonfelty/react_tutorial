import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import Main from "../components/Main";

const ReactFacts = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <NavBar 
        pic='react' 
        title='React' 
        subtitle='Lesson 1 - React Facts'
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Main 
        darkMode={darkMode}
      />
    </>
  )
}

export default ReactFacts;