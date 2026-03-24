import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home" style={{
      position: 'relative',
      overflow: 'visible',
      padding: '10rem var(--spacing-x) 2rem var(--spacing-x)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'left',
        zIndex: 10,
        width: '100%'
      }}>
        <div style={{ overflow: 'hidden' }}>
          <motion.h2
            initial={{ y: '120%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
            style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.8rem', color: 'var(--text-primary)' }}
          >
            Hi, I'm <span style={{ fontWeight: 600 }}>Himanshu Shekhar</span>
          </motion.h2>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: '120%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.2,
              marginBottom: '0.2rem',
              fontWeight: 500,
              letterSpacing: '-2px'
            }}
          >
            I turn user interactions
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: '120%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1], delay: 0.4 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              fontWeight: 500,
              letterSpacing: '-2px'
            }}
          >
            into meaningful experiences
          </motion.h1>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <motion.p
            initial={{ y: '120%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1], delay: 0.6 }}
            style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.6 }}
          >
            I am a Full Stack Developer specializing in Java, DSA, and the MERN stack, focusing on building scalable web applications with clean architecture and optimized user experience.
          </motion.p>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: '120%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1], delay: 2.7 }}
          >
            <Link to="/about">
              <button style={{
                padding: '1rem 2.5rem',
                borderRadius: '4px',
                border: 'none',
                background: 'var(--text-primary)',
                color: 'var(--bg-color)',
                fontSize: '1.1rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
              >
                About Me
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.8 }}
          style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}
        >
          <Link to="/#projects" style={{ cursor: 'pointer', display: 'block' }}>
            <div style={{
              width: '24px',
              height: '40px',
              border: '2px solid var(--text-secondary)',
              borderRadius: '12px',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px'
            }}>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                style={{
                  width: '4px',
                  height: '8px',
                  backgroundColor: 'var(--text-secondary)',
                  borderRadius: '2px'
                }}
              />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Modern Minimalist Outline Circles */}
      {/* Modern Minimalist Outline Circles */}
      {/* Modern Minimalist Outline Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 0.4, 
          scale: 1,
          x: [0, 20, -10, 15, 0],
          y: [0, -15, 12, -5, 0]
        }}
        transition={{
          opacity: { duration: 1.8, delay: 3.8, ease: 'easeOut' },
          scale: { duration: 1.8, delay: 3.8, ease: [0.34, 1.56, 0.64, 1] }, 
          x: { repeat: Infinity, duration: 20, ease: "easeInOut", delay: 5.6 }, 
          y: { repeat: Infinity, duration: 25, ease: "easeInOut", delay: 5.6 }
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '30%',
          width: '500px',
          height: '500px',
          border: '1.5px solid var(--text-secondary)',
          borderRadius: '50%',
          zIndex: 5,
          pointerEvents: 'none',
          willChange: 'transform'
        }} 
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 0.3, 
          scale: 1,
          x: [0, -25, 15, -10, 0],
          y: [0, 15, -20, 10, 0]
        }}
        transition={{
          opacity: { duration: 1.8, delay: 4.0, ease: 'easeOut' },
          scale: { duration: 1.8, delay: 4.0, ease: [0.34, 1.56, 0.64, 1] },
          x: { repeat: Infinity, duration: 22, ease: "easeInOut", delay: 5.8 }, 
          y: { repeat: Infinity, duration: 27, ease: "easeInOut", delay: 5.8 }
        }}
        style={{
          position: 'absolute',
          top: '25%',
          left: '45%',
          width: '600px',
          height: '600px',
          border: '1.5px solid var(--text-secondary)',
          borderRadius: '50%',
          zIndex: 5,
          pointerEvents: 'none',
          willChange: 'transform'
        }} 
      />

    </section>
  );
}
