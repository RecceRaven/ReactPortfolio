import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/FOoter';
import SplashPage from './components/Pages/Splash/Splash'; // Ensure correct import path
import AboutMe from './components/Pages/AboutMe/AboutMe';
// Import other pages

const AppContent = () => {
  const location = useLocation(); // Hook to get the current location
  const isSplashPage = location.pathname === '/'; // Check if it's the splash page

  return (
    <>
      {!isSplashPage && <Header />}
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        {/* Define other routes */}
      </Routes>
      {!isSplashPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
