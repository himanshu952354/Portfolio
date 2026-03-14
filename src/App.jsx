import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MoreProjects from './components/MoreProjects';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

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
    }
  }, [location]);

  return (
    <div className="app-container">
      <CustomCursor isHoveringRing={isHoveringRing} />
      <Navbar setIsHoveringRing={setIsHoveringRing} />
      <Routes>
        <Route path="/" element={
          <main>
            <Home />
            <Projects />
            <MoreProjects />
            <Contact />
          </main>
        } />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
