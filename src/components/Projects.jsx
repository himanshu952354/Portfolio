import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  {
    title: "Plan Pilot",
    description: "A modern Dashboard containing intuitive planning tools, visual metrics, and fully responsive layouts.",
    tech: ["MERN Stack", "React", "Node.js", "MongoDB"],
    github: "https://github.com/himanshu952354/Plan-Pilot",
    live: "https://plan-pilot-blush.vercel.app/",
    images: [
      "/Portfolio/projects/plan_pilot.png",
      "https://images.unsplash.com/photo-1504868584819-f8e905b6fc79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Echo",
    description: "AI-powered sentiment analysis and performance metrics for real-time call center insights.",
    tech: ["React", "Node.js", "AI Analytics", "Tailwind"],
    github: "https://github.com/himanshu952354/Echo",
    live: "https://echo-gold.vercel.app/",
    images: [
      "/Portfolio/projects/echo_gold.png",
      "https://images.unsplash.com/photo-1523474253046-2cd2c78b68ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "AgroTools",
    description: "A digital marketplace empowering modern agriculture with premium farming supplies, equipment, and direct-to-farm delivery.",
    tech: ["HTML5", "CSS3", "PHP", "MySQL"],
    github: "https://github.com/himanshu952354/AgroTools/tree/master",
    live: "https://agrotools.free.nf/Home.php",
    images: [
      "/Portfolio/projects/agrotools.png",
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const ExploreButton = ({ href, Icon, children, ...props }) => (
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
      fontWeight: '500',
      cursor: 'pointer'
    }}
    {...props}
  >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
      {Icon && <Icon style={{ fontSize: '1.3rem' }} />}
      <span style={{ fontSize: '0.85rem' }}>{children || "Explore"}</span>
    </div>
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
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          style={{
            fontSize: 'clamp(3rem, 7vw, 10rem)',
            lineHeight: 1,
            marginBottom: '6rem',
            fontWeight: 400,
            letterSpacing: '-2px',
            color: 'var(--text-primary)'
          }}
        >
          Projects
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {projectsData.map((project, index) => (
            <div
              key={index}
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
                <h3
                  data-aos="fade-up"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: 500,
                    margin: 0,
                    maxWidth: '12ch',
                    lineHeight: 1,
                    letterSpacing: '-1px'
                  }}
                >
                  {project.title}
                </h3>
                <div data-aos="fade-up" data-aos-delay="100">
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '1.1rem',
                      marginTop: '1rem',
                      maxWidth: '400px',
                      lineHeight: 1.6,
                      fontWeight: 400
                    }}
                  >
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                    <ExploreButton href={project.live} Icon={FiExternalLink}>Live</ExploreButton>
                    <ExploreButton href={project.github} Icon={FiGithub}>GitHub</ExploreButton>
                  </div>
                </div>
              </div>

              {/* Right Column: Landscape Image */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ flex: 1.2, minWidth: '300px', width: '100%' }}
              >
                <LandscapeImage src={project.images[0]} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
