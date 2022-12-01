import React from 'react';
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Timer from '../components/Timer';

const ReactFacts = () => {
  return (
    <>
      <NavBar pic='react' title='React' subtitle='Lesson 1 - React Facts'/>
      <Main />
      <Timer />
    </>
  )
}

export default ReactFacts;