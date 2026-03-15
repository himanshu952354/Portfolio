import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const moreProjectsData = [
  {
    title: "Social Media Dashboard",
    link: "#",
  },
  {
    title: "Memory Game",
    link: "#",
  },
  {
    title: "Weather App",
    link: "#",
  },
  {
    title: "E-commerce API",
    link: "#",
  },
  {
    title: "Task Management Tool",
    link: "#",
  },
];

const ProjectItem = ({ title, link }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center", "end start"]
  });

  // Scroll blur and opacity effect like mohitkumar.dev
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.3, 1, 1, 0.3]);
  const blur = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [5, 0, 0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.a
      ref={itemRef}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 0',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        textDecoration: 'none',
        color: 'var(--text-primary)',
        opacity,
        filter: `blur(${blur}px)`,
        scale,
      }}
      whileHover={{ x: 10 }}
      transition={{ duration: 0.3 }}
      className="more-project-item"
    >
      <h3 style={{
        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
        fontWeight: 500,
        margin: 0,
        letterSpacing: '-1px',
        transition: 'font-weight 0.2s ease'
      }}>
        {title}
      </h3>

      <motion.div
        whileHover={{ scale: 1.1, backgroundColor: '#000', color: '#fff' }}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: '1px solid #000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          transition: 'background-color 0.3s ease',
          color: '#000'
        }}
      >
        <FiArrowUpRight />
      </motion.div>
    </motion.a>
  );
};

export default function MoreProjects() {
  return (
    <section id="more-projects" style={{
      padding: '10rem var(--spacing-x) 0 var(--spacing-x)',
      backgroundColor: 'var(--bg-color)'
    }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: 'clamp(3rem, 7vw, 10rem)',
          lineHeight: 1,
          marginBottom: '6rem',
          fontWeight: 400,
          letterSpacing: '-2px',
          color: 'var(--text-primary)',
          opacity: 0.2
        }}
      >
        More Projects
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {moreProjectsData.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
