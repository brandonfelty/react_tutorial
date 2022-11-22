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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ReactFacts />} />
          <Route path="/info" element={<BusinessCard />} />
          <Route path="/airbnb" element={<AirBNB />} />
          <Route path='/jokes' element={<Jokes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;