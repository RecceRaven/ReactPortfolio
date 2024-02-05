import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/FOoter';
import SplashPage from './components/Pages/Splash/Splash';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Contact from './components/Pages/Contact/Contact';
import Resume from './components/Pages/Resume/Resume';
// Import other pages

const Layout = () => {
  const location = useLocation(); // Hook to get the current location
  const isSplashPage = location.pathname === '/'; // Check if it's the splash page

  return (
    <>
      {!isSplashPage && <Header />}
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        {/* Define other routes */}
      </Routes>
      {!isSplashPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
