import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const moreProjectsData = [
  {
    title: "Playlist",
    link: "https://himanshu952354.github.io/PortFolio/playlist.html",
    image: "/Portfolio/projects/playlist-thumbnail.png"
  },
  {
    title: "Gift Recommender",
    link: "https://himanshu952354.github.io/Giftit/",
    image: "/Portfolio/projects/giftit-thumbnail.png"
  },
  {
    title: "Weather App",
    link: "https://weather-app-coral-mu-94.vercel.app/",
    image: "/Portfolio/projects/weather-thumbnail.png"
  },
  {
    title: "Contact Manager GUI",
    link: "https://github.com/himanshu952354/Contact-Search-GUI",
    image: "/Portfolio/projects/contact-manager-thumbnail.png"
  }
];

const ProjectItem = ({ title, link, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center", "end start"]
  });

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Scroll blur and opacity effect like mohitkumar.dev
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={itemRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        display: 'flex',
        width: '100%',
        textDecoration: 'none',
        color: 'var(--text-primary)',
        position: 'relative',
        transform: 'translateZ(0)', // hardware acceleration
        willChange: 'transform'
      }}
      whileHover={{ scale: 0.98, x: 10 }}
      transition={{ duration: 0.3 }}
      className="more-project-item"
    >
      <motion.div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '2rem 0',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          opacity,
          scale,
          willChange: 'transform, opacity'
        }}
      >
        <h3 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontWeight: 500,
          margin: 0,
          letterSpacing: '-1px',
          transition: 'font-weight 0.2s ease',
          zIndex: 2,
          position: 'relative'
        }}>
          {title}
        </h3>

        {/* Floating Thumbnail Image */}
        {image && (
          <motion.div
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.5,
              x: mousePos.x,
              y: mousePos.y
            }}
            transition={{ 
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
              x: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
              y: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 }
            }}
            style={{
              position: 'absolute',
              top: '-100px', // center offset half height
              left: '-175px', // center offset half width
              width: '350px',
              height: '200px',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            <img 
              src={image} 
              alt={`${title} preview`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                display: 'block'
              }}
            />
          </motion.div>
        )}

        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          animate={{
            scale: isHovered ? 1.1 : 1,
            backgroundColor: isHovered ? '#000' : 'transparent',
            color: isHovered ? '#fff' : '#000'
          }}
          transition={{ duration: 0.3 }}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '1px solid #000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            cursor: 'pointer',
            zIndex: 15
          }}
        >
          <FiArrowUpRight />
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: 'var(--text-primary)',
          zIndex: 2,
          transformOrigin: 'left',
          transform: 'translateZ(0)'
        }}
      />
    </motion.div>
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
