import { motion } from 'framer-motion';
import { FiArrowUpRight, FiArrowRight, FiPenTool, FiGrid } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Certificates from './Certificates';
import CP from './CP';
import Education from './Education';
import Contact from './Contact';
import { 
  SiHtml5, SiCss, SiSass, SiBootstrap, SiTailwindcss, SiJavascript, 
  SiTypescript, SiReact, SiNextdotjs, SiAstro, SiReactquery, 
  SiSwr, SiStyledcomponents, SiGit, SiGreensock, SiFigma, SiFramer,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython, 
  SiCplusplus, SiPostman, SiGithub, SiC, SiVercel, SiRender, SiCanva
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04
    }
  }
};

const staggerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function AboutPage() {
  const navigate = useNavigate();

  const techStack = [
    { name: 'Java', icon: <DiJava /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React js', icon: <SiReact /> },
    { name: 'Node js', icon: <SiNodedotjs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'SQL', icon: <SiMysql /> },
    { name: 'HTML / CSS', icon: <div style={{ display: 'flex', gap: '4px' }}><SiHtml5 /><SiCss /></div> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Git / GitHub', icon: <div style={{ display: 'flex', gap: '4px' }}><SiGit /><SiGithub /></div> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'C', icon: <SiC /> },
    { name: 'Vercel', icon: <SiVercel /> },
    { name: 'Render', icon: <SiRender /> },
    { name: 'Canva', icon: <SiCanva /> }
  ];


  return (
    <div style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-primary)',
      minHeight: '100vh',
      padding: '0 0 0 0',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Intro Hero with Watermark */}
      <section style={{ 
        position: 'relative', 
        padding: '12rem var(--spacing-x) 4rem var(--spacing-x)',
        overflow: 'visible'
      }}>
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.03, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '5rem',
            left: '2rem',
            fontSize: 'clamp(8rem, 25vw, 20rem)',
            fontWeight: 800,
            margin: 0,
            whiteSpace: 'nowrap',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        >
          ABOUT
        </motion.h1>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2 
              initial={{ y: '120%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                lineHeight: 1,
                fontWeight: 500,
                letterSpacing: '-0.04em',
                marginBottom: '0.8rem',
                margin: 0
              }}
            >
              Himanshu Shekhar
            </motion.h2>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.p 
              initial={{ y: '120%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                lineHeight: 1.4,
                fontWeight: 400,
                color: 'var(--text-secondary)',
                maxWidth: '800px',
                marginBottom: '2.5rem'
              }}
            >
              Full Stack Developer from India. I craft high-performance digital products with a focus on clean architecture and minimal design.
            </motion.p>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <motion.div 
              initial={{ y: '120%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.4 }}
            >
              <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', color: 'var(--text-muted)' }}>Services</h2>
              <ul style={{ fontSize: '1.2rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: 0 }}>
                {['Web Development', 'UI/UX Design', 'Backend Engineering', 'Problem Solving'].map((s) => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#000' }}></span>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Background Circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.4, 
            scale: 1,
            x: [0, 15, -10, 12, 0],
            y: [0, -12, 10, -5, 0]
          }}
          transition={{
            opacity: { duration: 1.8, delay: 0.5, ease: 'easeOut' },
            scale: { duration: 1.8, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] },
            x: { repeat: Infinity, duration: 20, ease: "easeInOut", delay: 2.3 },
            y: { repeat: Infinity, duration: 24, ease: "easeInOut", delay: 2.3 }
          }}
          style={{
            position: 'absolute',
            top: '8%',
            left: '40%',
            width: '450px',
            height: '450px',
            border: '1.5px solid var(--text-secondary)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none'
          }} 
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1,
            x: [0, -20, 15, -8, 0],
            y: [0, 15, -15, 8, 0]
          }}
          transition={{
            opacity: { duration: 1.8, delay: 0.8, ease: 'easeOut' },
            scale: { duration: 1.8, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] },
            x: { repeat: Infinity, duration: 22, ease: "easeInOut", delay: 2.6 },
            y: { repeat: Infinity, duration: 27, ease: "easeInOut", delay: 2.6 }
          }}
          style={{
            position: 'absolute',
            top: '22%',
            left: '55%',
            width: '550px',
            height: '550px',
            border: '1.5px solid var(--text-secondary)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none'
          }} 
        />
      </section>

      {/* Tech & Tools Grid */}
      <section style={{ padding: '4rem var(--spacing-x) 8rem var(--spacing-x)' }}>
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
          fontWeight: 400, 
          marginBottom: '5rem', 
          letterSpacing: '-0.04em' 
        }}>Tech & Tools</h2>
        <motion.div 
          className="tech-grid" 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)', 
            gap: '4rem 2rem',
            maxWidth: '1200px'
          }}
        >
          {techStack.map((tool) => (
            <motion.div 
              key={tool.name} 
              variants={staggerItem}
              style={{ 
                fontSize: '1.2rem', 
                color: 'var(--text-secondary)',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem'
              }}
            >
              <div style={{ fontSize: '1.8rem', color: '#000' }}>{tool.icon}</div>
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile alternative for the grid if needed */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1024px) {
            .tech-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
          @media (max-width: 640px) {
            .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}} />
      </section>

      <Certificates />
      <CP />
      <Education />

      <Contact paddingBottom="4rem" />

    </div>
  );
}
