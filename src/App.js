import React from 'react';
import Navigation from '/components/Navigation';
import About from '/components/About';
import Portfolio from '/components/Portfolio';
import Contact from '/components/Contact';
import Resume from '/components/Resume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;