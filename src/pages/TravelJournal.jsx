import React from 'react'
import NavBar from '../components/NavBar';
import Entry from '../components/Entry';

const TravelJournal = () => {
  return (
    <div>
      <NavBar title='My Travel Journal' pic='umbrella'/>
      <Entry />
    </div>
  )
}

export default TravelJournal