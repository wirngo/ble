import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HomePage from './components/HomePage';
import JourneyStart from './components/JourneyStart';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App bg-ivory min-h-screen flex flex-col">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/journey-start" element={<JourneyStart />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
