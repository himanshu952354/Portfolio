import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import StaggeredMenu from './StaggeredMenu';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Projects', path: '/#projects' },
  { 
    title: 'About Me', 
    path: '/about',
    subItems: [
      { label: 'Tech & Tools', link: '/about#tech' },
      { label: 'Training', link: '/about#training' },
      { label: 'Certificates', link: '/about#certificates' },
      { label: 'Achievements', link: '/about#cp' },
      { label: 'Education', link: '/about#education' }
    ]
  },
  { title: 'Resume', path: '/resume' }
];

const menuItems = navLinks.map(link => ({
  label: link.title,
  ariaLabel: `Go to ${link.title} page`,
  link: link.path,
  target: link.target,
  subItems: link.subItems
}));



const socialItems = [
  { label: 'GitHub', link: 'https://github.com/himanshu952354' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/himanshu9523' },
  { label: 'Email', link: 'mailto:shekhar952354@gmail.com' }
];

export default function Navbar({ setIsHoveringRing, setIsHoveringMenu, setMenuPosition }) {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '1rem var(--spacing-x)' : '1.5rem var(--spacing-x)',
        background: scrolled ? 'rgba(var(--bg-color-rgb), 0.8)' : 'transparent',
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {/* Interactive Logo Ring (Double) */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <motion.div
          onMouseEnter={() => setIsHoveringRing && setIsHoveringRing(true)}
          onMouseLeave={() => setIsHoveringRing && setIsHoveringRing(false)}
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            border: '1.5px solid var(--text-primary)',
            flexShrink: 0,
            cursor: 'pointer',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          whileHover={{
            scale: 1.1,
            borderWidth: '2.5px',
            transition: { duration: 0.2 }
          }}
        >
          {/* Inner Ring */}
          <motion.div
            style={{
              width: '35px',
              height: '35px',
              borderRadius: '50%',
              border: '1.5px solid var(--text-primary)'
            }}
            whileHover={{
              backgroundColor: 'var(--text-primary)',
              borderWidth: '2.5px',
              transition: { duration: 0.2 }
            }}
          />
        </motion.div>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '2rem' }}>
        {/* Desktop Links (Optional, if you want them visible) */}
        <div style={{ display: 'none', gap: '2rem' /* Hidden on mobile by default in your design probably */ }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: pathname === link.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: 500,
                fontSize: '0.9rem'
              }}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Staggered Menu Container */}
        <div style={{ position: 'relative', zIndex: 100 }}>
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering={true}
            menuButtonColor="var(--text-primary)"
            openMenuButtonColor="#ffffff"
            changeMenuColorOnOpen={true}
            colors={['#1a1a1a', '#000000']}
            accentColor="var(--accent-color)"
            isRouterLink={true} // Add this if StaggeredMenu supports it
            setIsHoveringMenu={setIsHoveringMenu}
            setMenuPosition={setMenuPosition}
          />
        </div>
      </div>
    </motion.nav>
  );
}
