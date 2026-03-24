import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { useRef, useState } from 'react';

const achievementsData = [
  {
    title: "LeetCode",
    subtitle: "100+ Questions Solved • 1500+ Contest Rating",
    link: "https://leetcode.com/u/Dj952354/"
  },
  {
    title: "Codeforces",
    subtitle: "Newbie • Rating: 937 (Max: 969)",
    link: "https://codeforces.com/profile/dj9523"
  },
  {
    title: "CodeChef",
    subtitle: "1 Star • Rating: 1345 (Max: 1345) • Global Rank: 55920",
    link: "https://www.codechef.com/users/troop_team_23"
  }
];

const ListItem = ({ title, subtitle, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={itemRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        width: '100%',
        textDecoration: 'none',
        color: 'var(--text-primary)',
        position: 'relative',
        transform: 'translateZ(0)'
      }}
      whileHover={{ scale: 0.98, x: 10 }}
      transition={{ duration: 0.3 }}
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
        <div>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.3rem)', fontWeight: 500, margin: 0, color: '#000' }}>{title}</h3>
          <p style={{ color: 'var(--text-secondary)', margin: '0.4rem 0 0 0', fontSize: '1rem' }}>{subtitle}</p>
          {description && <p style={{ color: 'var(--text-muted)', margin: '0.6rem 0 0 0', fontSize: '0.95rem', maxWidth: '600px', lineHeight: 1.5 }}>{description}</p>}
        </div>

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
            flexShrink: 0,
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
          crossOrigin: 'anonymous',
          zIndex: 2,
          transformOrigin: 'left',
          transform: 'translateZ(0)'
        }}
      />
    </motion.div>
  );
};

export default function CP() {
  return (
    <section id="cp" style={{ padding: '4rem var(--spacing-x) 8rem var(--spacing-x)' }}>
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
          Achievements
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {achievementsData.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
