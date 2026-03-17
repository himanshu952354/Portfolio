import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MoreProjects from './components/MoreProjects';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const [isHoveringRing, setIsHoveringRing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,    // Run animation only once to significantly improve mobile scroll performance
      mirror: false, // Don't animate out when scrolling past
    });
  }, []);

  return (
    <div className="app-container">
      <SmoothScroll />
      <CustomCursor isHoveringRing={isHoveringRing} />
      <Navbar setIsHoveringRing={setIsHoveringRing} />
      <Routes>
        <Route path="/" element={
          <main>
            <Home />
            <Projects />
            <MoreProjects />
            <Contact paddingBottom="4rem" />
          </main>
        } />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
