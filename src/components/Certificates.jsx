import { motion } from 'framer-motion';
import { FiAward, FiArrowUpRight } from 'react-icons/fi';
import { useState } from 'react';

const certificates = [
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "2024",
    link: "https://drive.google.com/file/d/1avD1aTeGwgOkInPW3HeXkZPLVzWWhcs7/view?usp=sharing"
  },
  {
    title: "Human Computer Interaction",
    issuer: "NPTEL",
    date: "2025",
    link: "https://drive.google.com/drive/folders/1aNGYgxHohKM0LAT96LGJpk7rLLKOl4fH?usp=sharing"
  },
  {
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys Springboard",
    date: "2025",
    link: "https://drive.google.com/file/d/1hR_xZfWZ9bMw4HHe_xh8szCo-towZUSC/view?usp=sharing"
  },
  {
    title: "Fundamentals of Network Communication",
    issuer: "University of Colorado",
    date: "2024",
    link: "https://coursera.org/verify/E5WER3UWKGCJ"
  },
  {
    title: "Java Programming",
    issuer: "Lovely Professional University",
    date: "2025",
    link: "https://drive.google.com/file/d/189gpbome7y3ROYzALjHpmSNpxpfhojEr/view?usp=drive_link"
  },
  {
    title: "Python Programming & Software Design For Absolute Beginners",
    issuer: "Udemy",
    date: "2023",
    link: "https://ude.my/UC-b05ab72f-8c87-4a42-b335-678b441c01ea"
  }
];

const FlipCard = ({ cert }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ perspective: '1000px', width: '100%', aspectRatio: '1.2' }}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          cursor: 'pointer'
        }}
      >
        {/* Front Side */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '2.5rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
          border: '1px solid rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: isHovered ? 1 : 2
        }}>
          <div style={{ fontSize: '3rem', color: '#000', marginBottom: '1.5rem' }}><FiAward /></div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '0 0 0.5rem 0', color: '#000' }}>{cert.title}</h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>{cert.issuer}</p>
        </div>

        {/* Back Side */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '20px',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'rotateY(180deg)',
          textAlign: 'center',
          zIndex: isHovered ? 2 : 1
        }}>
          <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.8rem' }}>Issued: {cert.date}</p>
          <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            transition: 'background-color 0.2s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#fff'; }}
          >
            Verify <FiArrowUpRight />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default function Certificates() {
  return (
    <section id="certificates" style={{ padding: '4rem var(--spacing-x) 8rem var(--spacing-x)' }}>
      <div style={{ width: '100%' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
            fontWeight: 400, 
            marginBottom: '5rem', 
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)'
          }}
        >
          Certificates
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '3rem',
          maxWidth: '1200px'
        }}>
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <FlipCard cert={cert} fillCard />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
