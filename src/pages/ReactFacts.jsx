import React from 'react';
import NavBar from "../components/NavBar";
import Main from "../components/Main";

const ReactFacts = () => {
  let darkMode = true;

  return (
    <>
      <NavBar 
        pic='react' 
        title='React' 
        subtitle='Lesson 1 - React Facts'
        darkMode={darkMode}
      />
      <Main 
        darkMode={darkMode}
      />
    </>
  )
}

export default ReactFacts;