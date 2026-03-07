import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import WellnessHivePage from './pages/WellnessHivePage';
import OptimizaPage from './pages/OptimizaPage';
import {HelmetProvider} from 'react-helmet-async';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/wellness-hive" element={<WellnessHivePage />} />
            <Route path="/optimiza" element={<OptimizaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;