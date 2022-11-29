import React from 'react';
import NavBar from "../components/NavBar";
import Main from "../components/Main";

const ReactFacts = () => {
  return (
    <>
      <NavBar pic='react' title='React' subtitle='Lesson 1 - React Facts'/>
      <Main />
      <a href='/airbnb'>AirBNB</a>
    </>
  )
}

export default ReactFacts;