// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Venue from './Components/Venue/Venue';
import Submission from './Components/Submission/Submission';
import Tracks from './Components/Tracks/Tracks';
import CommitteePage from './Components/Committee/Committee';
import Registration from './Components/Registration/Registration';
import ConferenceSpeakers from "./Components/Speakers/ConferenceSpeakers";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/ConferenceSpeakers" element={<ConferenceSpeakers/>} />


          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
