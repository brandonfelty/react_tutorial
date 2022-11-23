import React from 'react'
import NavBar from '../components/NavBar';
import Entry from '../components/Entry';
import { travelJournalData } from '../dummyData';

const TravelJournal = () => {
  return (
    <div>
      <NavBar title='My Travel Journal' pic='umbrella'/>
      {travelJournalData.map((travelItem, index) => (
        <Entry 
          key={index}
          travelItem={travelItem}
        />
      ))}
    </div>
  )
}

export default TravelJournal