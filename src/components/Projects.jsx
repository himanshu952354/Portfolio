import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  {
    title: "Plan Pilot",
    description: "A modern Dashboard containing intuitive planning tools, visual metrics, and fully responsive layouts.",
    tech: ["MERN Stack", "React", "Node.js", "MongoDB"],
    github: "#",
    live: "https://plan-pilot-blush.vercel.app/",
    images: [
      "/Portfolio_NEW/projects/plan_pilot.png",
      "https://images.unsplash.com/photo-1504868584819-f8e905b6fc79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Echo",
    description: "AI-powered sentiment analysis and performance metrics for real-time call center insights.",
    tech: ["React", "Node.js", "AI Analytics", "Tailwind"],
    github: "#",
    live: "https://echo-gold.vercel.app/",
    images: [
      "/Portfolio_NEW/projects/echo_gold.png",
      "https://images.unsplash.com/photo-1523474253046-2cd2c78b68ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "AgroTools",
    description: "A digital marketplace empowering modern agriculture with premium farming supplies, equipment, and direct-to-farm delivery.",
    tech: ["HTML5", "CSS3", "PHP", "MySQL"],
    github: "#",
    live: "http://localhost/Project/Project_FB/Home.php",
    images: [
      "/Portfolio_NEW/projects/agrotools.png",
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
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.1rem',
                  marginTop: '1rem',
                  maxWidth: '400px',
                  lineHeight: 1.6,
                  fontWeight: 400
                }}>
                  {project.description}
                </p>
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
