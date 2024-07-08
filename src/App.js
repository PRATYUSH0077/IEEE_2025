// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
// import Header from './components/Header';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';

const App = () => {
  return (
    <Router>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </div>
  </Router>
  );
};

export default App;
