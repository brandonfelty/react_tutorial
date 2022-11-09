import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ReactFacts from "./components/ReactFacts";
import BusinessCard from "./components/BusinessCard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ReactFacts />} />
          <Route path="/info" element={<BusinessCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;