import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  {
    title: "Full Stack Dashboard",
    description: "A comprehensive dashboard with data visualization, secure authentication, and real-time backend updates.",
    tech: ["MERN Stack", "React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e905b6fc79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "E-Commerce Platform",
    description: "A secure and scalable e-commerce site featuring a complete shopping cart system, user profiles, and order tracking.",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    github: "#",
    live: "#",
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523474253046-2cd2c78b68ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Algorithm Visualizer",
    description: "An interactive web application to visualize complex Data Structures and Algorithms like Sorting, Pathfinding, etc.",
    tech: ["HTML5", "CSS3", "JavaScript", "Algorithms"],
    github: "#",
    live: "#",
    images: [
      "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const ExploreButton = ({ href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="explore-pulse-btn"
    whileTap={{ scale: 0.95 }}
    style={{
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      border: '1px solid var(--text-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      color: 'var(--text-primary)',
      fontSize: '0.9rem',
      fontWeight: '500',
      marginTop: '2rem'
    }}
  >
    Explore
  </motion.a>
);

const LandscapeImage = ({ src, alt }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      style={{
        width: '100%',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        borderRadius: '20px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
        backgroundColor: '#e5e7eb'
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </motion.div>
  );
};


export default function Projects() {
  return (
    <section id="projects" style={{
      position: 'relative',
      padding: '0',
      color: '#000'
    }}>
      <div style={{
        padding: '4rem var(--spacing-x) 5rem var(--spacing-x)'
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
          Projects
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '8rem',
                flexWrap: 'wrap'
              }}
            >
              {/* Left Column: Heading & Explore */}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minWidth: '300px',
                alignItems: 'flex-start'
              }}>
                <motion.h3 style={{
                  fontSize: 'clamp(3rem, 6vw, 6rem)',
                  fontWeight: 500,
                  margin: 0,
                  maxWidth: '12ch',
                  lineHeight: 1,
                  letterSpacing: '-1px'
                }}>
                  {project.title}
                </motion.h3>
                <ExploreButton href={project.live} />
              </div>

              {/* Right Column: Landscape Image */}
              <div style={{ flex: 1.2, minWidth: '300px', width: '100%' }}>
                <LandscapeImage src={project.images[0]} alt={project.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
