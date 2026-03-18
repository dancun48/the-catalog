import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import BackToTop from './components/Floating/BackToTop';
import WhatsAppFloat from './components/Floating/WhatsAppFloat';
import CookieConsent from './components/Floating/CookieConsent';
import HomePage from './pages/HomePage';
import WellnessHivePage from './pages/WellnessHivePage';
import OptimizaPage from './pages/OptimizaPage';
import ContactPage from './pages/ContactPage';
import FAQsPage from './pages/FAQsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';
import AboutPage from './pages/AboutPage';
import ScrollToHash from './components/ScrollToHash';
import InsightsPage from './pages/InsightsPage';
import PodcastPage from './pages/PodcastPage';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/wellness-hive" element={<WellnessHivePage />} />
            <Route path="/health-optimiza" element={<OptimizaPage />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/cookies" element={<CookiesPolicyPage />} />
          </Routes>
        </div>
        <Footer />
        
        {/* Floating Components */}
        <BackToTop />
        <WhatsAppFloat />
        <CookieConsent />
      </div>
    </Router>
    
  );
}

export default App;