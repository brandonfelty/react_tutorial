import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ReactFacts from "./pages/ReactFacts";
import BusinessCard from "./pages/BusinessCard";
import AirBNB from "./pages/AirBNB";
import Jokes from "./pages/Jokes";
import TravelJournal from "./pages/TravelJournal";
import MemeGenerator from "./pages/MemeGenerator";
import Boxes from "./pages/Boxes";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ReactFacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info" element={<BusinessCard />} />
          <Route path="/airbnb" element={<AirBNB />} />
          <Route path='/jokes' element={<Jokes />} />
          <Route path='/travel' element={<TravelJournal />} />
          <Route path='/meme_gen' element={<MemeGenerator />} />
          <Route path='/boxes' element={<Boxes />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;