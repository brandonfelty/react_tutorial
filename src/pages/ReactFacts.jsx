import React from 'react';
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Timer from '../components/Timer';
import Welcome from '../components/Welcome';
import Form from '../components/Form';


const ReactFacts = () => {
  return (
    <>
      <NavBar pic='react' title='React' subtitle='Lesson 1 - React Facts'/>
      <Main />
      <hr/>
      <Form />
      <hr/>
      <Welcome />
      <Timer />
    </>
  )
}

export default ReactFacts;