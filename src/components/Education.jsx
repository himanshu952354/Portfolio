import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const educationData = [
  {
    degree: "Bachelor of Technology (Current Undergraduate)",
    institution: "Lovely Professional University, Phagwara, Punjab",
    duration: "2023 - Present",
    description: "Currently pursuing B.Tech in Computer Science & Engineering. Gaining expertise in Data Structures, Algorithms, Web Development, and core engineering principles."
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Ram Krishna College, Madhubani, Bihar",
    duration: "2020 - 2022",
    description: "Completed with a focus on Physics, Chemistry, and Mathematics (Science stream). Highly oriented towards engineering problem solving formats."
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Regional Secondary School, Madhubani, Bihar",
    duration: "2018 - 2020",
    description: "Completed general curriculum covering Math, Science, and languages thoroughly designed forming absolute layout base."
  }
];

export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="education" style={{ padding: '4rem var(--spacing-x) 8rem var(--spacing-x)' }}>
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
          Education
        </motion.h2>

        <div ref={containerRef} style={{ position: 'relative' }}>
          {/* Top Label */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '-25px',
            transform: 'translateX(-50%)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            zIndex: 3
          }}>Present</div>

          {/* Bottom Label */}
          <div style={{
            position: 'absolute',
            left: '20px',
            bottom: '-25px',
            transform: 'translateX(-50%)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            zIndex: 3
          }}>2018</div>

          {/* Vertical Line Backing */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'rgba(0,0,0,0.04)',
            zIndex: 1
          }}></div>

          {/* Infinite Flowing pulse overlay guides */}
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '0% 100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, transparent, #000, transparent)',
              backgroundSize: '100% 200%',
              zIndex: 1,
              opacity: 0.3
            }}
          />

          {/* Animated Progress Line */}
          <motion.div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: '#000',
            scaleY: scrollYProgress,
            originY: 0,
            zIndex: 2,
            boxShadow: '0 0 10px rgba(0,0,0,0.3)'
          }} />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              style={{
                position: 'relative',
                paddingLeft: '60px',
                marginBottom: index !== educationData.length - 1 ? '4rem' : 0,
                zIndex: 2
              }}
            >
              {/* Dot outer hollow ring */}
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '12px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                border: '2px solid #000',
                backgroundColor: 'var(--bg-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 10px rgba(0,0,0,0.02)',
                zIndex: 3
              }}>
                {/* Inner Filled Core */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, margin: '0px 0px -50% 0px' }}
                  transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#000'
                  }}
                />
              </div>

              <div className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{edu.degree}</h3>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 500 }}>{edu.institution}</h4>
                <div style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.8rem',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '15px',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  {edu.duration}
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
