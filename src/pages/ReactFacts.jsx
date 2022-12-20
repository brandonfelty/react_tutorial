import React from 'react';
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Timer from '../components/Timer';
import Welcome from '../components/Welcome';
import StarWars from '../components/StarWars';

const ReactFacts = () => {
  return (
    <>
      <NavBar pic='react' title='React' subtitle='Lesson 1 - React Facts'/>
      <Main />
      <Welcome />
      <StarWars />
      <Timer />
    </>
  )
}

export default ReactFacts;